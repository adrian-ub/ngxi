import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScheduleSendOutlineIcon],svg[material-symbols-light-schedule-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.192 18.539V5.384l12.281 5.25h-.07q-.451.039-.909.133t-.798.252L5.192 7v3.885L10.04 12l-4.847 1.116V17l6.035-2.57q-.123.287-.204.629q-.08.341-.1.576v.011zm12.616 2.076q-1.671 0-2.836-1.164q-1.164-1.165-1.164-2.836t1.164-2.835t2.836-1.165q1.67 0 2.835 1.165q1.165 1.164 1.165 2.835t-1.165 2.836t-2.835 1.164m1.65-1.804l.546-.546l-1.812-1.811V13.73h-.769v3.046zm-13.266-4.38V7v10z"></svg:path>`,
})
export class MaterialSymbolsLightScheduleSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
