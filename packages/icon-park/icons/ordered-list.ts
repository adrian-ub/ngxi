import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOrderedListIcon],svg[icon-park-ordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4V13"></svg:path><svg:path d="M12 13H6"></svg:path><svg:path d="M12 27H6"></svg:path><svg:path d="M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998"></svg:path><svg:path d="M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5"></svg:path><svg:path d="M11 38H9"></svg:path><svg:path d="M9 4L6 6"></svg:path><svg:path d="M21 24H43"></svg:path><svg:path d="M21 38H43"></svg:path><svg:path d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkOrderedListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
