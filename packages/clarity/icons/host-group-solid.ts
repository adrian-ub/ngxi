import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostGroupSolidIcon],svg[clarity-host-group-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.08 31h-14A1.08 1.08 0 0 1 0 30V9c0-.596.484-1.08 1.08-1.08h14c.596 0 1.08.484 1.08 1.08v21a1.08 1.08 0 0 1-1.08 1m-11-19.04v2h8v-2zm3 12.92v2.16h2v-2.16z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="currentColor" d="M20.1 24.81h-2V6h-12V4h13a1 1 0 0 1 1 1z" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M24.08 20h-2V2h-11V0h12a1 1 0 0 1 1 1z" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityHostGroupSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
