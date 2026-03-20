import { Component, computed, input } from "@angular/core";

const paddingChoices = ['none', 'small', 'medium', 'large'] as const;
type Padding = typeof paddingChoices[number];

const backgroundChoices = ['standard', 'subtle', 'transparent'] as const;
type Background = typeof backgroundChoices[number];

@Component({
    selector: 'ui-box',
    styleUrl: './box.css',
    templateUrl: './box.html'
})
export class Box {
    public background = input<Background, Background | undefined>('standard', { transform: (v) => v && backgroundChoices.includes(v) ? v : 'standard' });
    public border = input<boolean, boolean | undefined>(true, { transform: (v) => v ?? false });
    public padding = input<Padding, Padding | undefined>('none', { transform: (v) => v && paddingChoices.includes(v) ? v : 'none' });

    protected classes = computed(() => [
        'ui-box',
        `ui-box__${this.background()}`,
        `ui-box__${this.padding()}`,
        this.border() ? 'ui-box__border' : null,
    ].filter(Boolean).join(' '));
}