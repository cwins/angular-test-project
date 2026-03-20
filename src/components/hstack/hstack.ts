import { Component, computed, input } from "@angular/core";

const gapChoices = ['small', 'medium', 'large', 'none'] as const;
type Gap = typeof gapChoices[number];

@Component({
    selector: 'ui-hstack',
    styleUrl: './hstack.css',
    templateUrl: './hstack.html'
})
export class HStack {
    public gap = input<Gap, Gap | undefined>('medium', { transform: (v) => v && gapChoices.includes(v) ? v : 'medium' });

    protected classes = computed(() => [
        'ui-hstack',
        `ui-hstack__gap-${this.gap()}`
    ].join(' '));
}
