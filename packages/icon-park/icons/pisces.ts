import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPiscesIcon],svg[icon-park-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24L44 24"></svg:path><svg:path d="M10 7C10 7 16 16.8203 16 24C16 31.1797 10 41 10 41"></svg:path><svg:path d="M38 7C38 7 32 16.9597 32 24C32 31.0403 38 41 38 41"></svg:path></svg:g>`,
})
export class IconParkPiscesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
