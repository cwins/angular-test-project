import { Component, computed, input, output } from "@angular/core";

const variantChoices = ['primary', 'secondary', 'outline'] as const;
type Variant = typeof variantChoices[number];

@Component({
    selector: 'ui-button',
    styleUrl: './button.css',
    templateUrl: './button.html'
})
export class Button {
    public label = input<string>();
    public disabled = input<boolean>(false);
    public size = input<'small' | 'medium' | 'large'>('medium');
    public variant = input<Variant, Variant | undefined>('primary', { transform: (v) => v && variantChoices.includes(v) ? v : 'primary' });

    public onClick = output<MouseEvent>();

    protected classes = computed(() => [
        'ui-button',
        `ui-button__${this.size()}`,
        `ui-button__${this.variant()}`,
    ].join(' '));
};
