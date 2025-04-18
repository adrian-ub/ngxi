import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChangeIcon],svg[icon-park-outline-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 31h20V5"></svg:path><svg:path d="M30 21H10v22m34-32l-6-6l-6 6"></svg:path><svg:path d="m16 37l-6 6l-6-6"></svg:path></svg:g>`,
})
export class IconParkOutlineChangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
