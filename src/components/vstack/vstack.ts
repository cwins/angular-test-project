import { Component, computed, input } from "@angular/core";

const gapChoices = ['small', 'medium', 'large', 'none'] as const;
type Gap = typeof gapChoices[number];

@Component({
    selector: 'ui-vstack',
    styleUrl: './vstack.css',
    templateUrl: './vstack.html'
})
export class VStack {
    public gap = input<Gap, Gap | undefined>('medium', { transform: (v) => v && gapChoices.includes(v) ? v : 'medium' });

    protected classes = computed(() => [
        'ui-vstack',
        `ui-vstack__gap-${this.gap()}`
    ].join(' '));
}
