import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCatIcon],svg[icon-park-outline-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M42 26c0 8.837-8.059 16-18 16S6 34.837 6 26m9-13.86c2.648-1.36 5.721-2.14 9-2.14s6.352.78 9 2.14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 26V8.488c0-1.731 2.05-2.645 3.337-1.487L15 12.093M42 26V8.488c0-1.731-2.05-2.645-3.337-1.487L33 12.093"></svg:path><svg:circle cx="30" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 30L4 31m15 4L7 41m25-11l12 1m-15 4l12 6"></svg:path></svg:g>`,
})
export class IconParkOutlineCatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
