import { Component, input } from "@angular/core";

const variantChoices = ['primary', 'secondary', 'outline'] as const;

interface ButtonInputs {
    variant: typeof variantChoices[number];
}

@Component({
    selector: 'ui-button',
    styleUrl: './button.css',
    templateUrl: './button.html'
})
export class Button {
    public label = input<string>();
    public size = input<'small' | 'medium' | 'large'>('medium');
    public variant = input<ButtonInputs['variant'], ButtonInputs['variant'] | undefined>('primary', { transform: (v) => v && variantChoices.includes(v) ? v : 'primary' });
};
