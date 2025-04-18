import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFeatherBoldIcon],svg[ph-feather-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.11 31.92a68 68 0 0 0-96.11-.05l-70.12 69.3A19.9 19.9 0 0 0 52 115.31V187l-28.48 28.51a12 12 0 0 0 17 17L69 204h71.7a19.87 19.87 0 0 0 14.15-5.86h.05l69.21-70a68.06 68.06 0 0 0 0-96.22m-79.21 17A44 44 0 0 1 210 108h-45l27.52-27.51a12 12 0 0 0-17-17L124 115V69.54ZM76 117l24-23.72V139l-24 24Zm63 63H93l48-48h45.5Z"></svg:path>`,
})
export class PhFeatherBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
