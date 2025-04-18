import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThermometerLossOutlineIcon],svg[material-symbols-light-thermometer-loss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.923 7.5h-7v-1h7zM8.763 20q-1.657 0-2.825-1.164Q4.768 17.67 4.768 16q0-1.084.544-1.987t1.456-1.475V6q0-.846.577-1.423T8.77 4t1.423.577T10.77 6v6.539q.912.57 1.446 1.474q.535.903.554 1.987q-.019 1.671-1.184 2.836Q10.422 20 8.764 20m.006-1q1.25 0 2.125-.875T11.77 16q0-.725-.312-1.35t-.888-1.05l-.8-.6V6q0-.425-.287-.712T8.769 5t-.712.288T7.769 6v7l-.8.6q-.575.425-.887 1.05T5.769 16q0 1.25.875 2.125T8.77 19m0-3"></svg:path>`,
})
export class MaterialSymbolsLightThermometerLossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
