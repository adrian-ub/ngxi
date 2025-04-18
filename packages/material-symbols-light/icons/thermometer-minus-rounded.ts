import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThermometerMinusRoundedIcon],svg[material-symbols-light-thermometer-minus-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.423 7.5q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h6q.213 0 .356.144t.144.357t-.144.356t-.356.143zM8.761 20q-1.663 0-2.827-1.164Q4.769 17.67 4.769 16q0-1.084.544-1.987t1.456-1.475V6q0-.846.577-1.423T8.77 4t1.423.577T10.77 6v6.539q.912.57 1.456 1.474T12.769 16q0 1.671-1.172 2.836T8.761 20M5.77 16h6q0-.725-.312-1.35t-.888-1.05l-.8-.6V6q0-.425-.287-.712T8.769 5t-.712.288T7.769 6v7l-.8.6q-.575.425-.887 1.05T5.769 16"></svg:path>`,
})
export class MaterialSymbolsLightThermometerMinusRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
