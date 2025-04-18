import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTextDecreaseIcon],svg[ic-round-text-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.61 19c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76c.79 0 1.33-.79 1.05-1.52L9.19 6.17C8.93 5.47 8.25 5 7.5 5s-1.43.47-1.69 1.17L1.56 17.48c-.28.73.27 1.52 1.05 1.52M7.44 7.6h.12l2.03 5.79H5.41zM15 12c0-.55.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundTextDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
