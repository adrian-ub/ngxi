import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTrainIcon],svg[fa-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 0q185 0 316.5 93.5T1536 320v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20H240q-22 0-30-20t8-35l213-202q-180-5-305.5-97T0 1216V320Q0 187 131.5 93.5T448 0zM768 1344q80 0 136-56t56-136t-56-136t-136-56t-136 56t-56 136t56 136t136 56m576-576V256H192v512z"></svg:path>`,
})
export class FaTrainIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
