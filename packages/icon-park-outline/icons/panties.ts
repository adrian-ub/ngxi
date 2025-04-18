import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePantiesIcon],svg[icon-park-outline-panties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M44 15c-3-3-5-9-5-9s-5 3.5-15 3.5S9 6 9 6s-1 5-5 9c0 12 17 27 17 27h6s17-15 17-27"></svg:path><svg:path d="M44 15s-9 1-13 8s-4 19-4 19M4 15s9 1 13 8s4 19 4 19"></svg:path></svg:g>`,
})
export class IconParkOutlinePantiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
