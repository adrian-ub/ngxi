import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLightningIcon],svg[ps-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 0L5 299l128 21l-42 192l256-320l-128-21zm28 222l-96 119l2-12l11-45l-45-7l-58-8l96-122l-2 19l-4 41l40 6z"></svg:path>`,
})
export class PsLightningIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
