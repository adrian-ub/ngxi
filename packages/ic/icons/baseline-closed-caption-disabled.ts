import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineClosedCaptionDisabledIcon],svg[ic-baseline-closed-caption-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-1h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zm12.95 18.61L17.17 20H5a2 2 0 0 1-2-2V6c0-.05.02-.1.02-.15L1.39 4.22L2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></svg:path>`,
})
export class IcBaselineClosedCaptionDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
