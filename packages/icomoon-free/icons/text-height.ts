import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTextHeightIcon],svg[icomoon-free-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12h2l-2.5 3l-2.5-3h2V4h-2l2.5-3L16 4h-2zM10 1v4L9 3H6v11h2v1H2v-1h2V3H1L0 5V1z"></svg:path>`,
})
export class IcomoonFreeTextHeightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
