import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRugbyOneIcon],svg[icon-park-outline-rugby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M4 24c2.292 8.63 10.377 15 20 15s17.708-6.37 20-15C41.708 15.37 33.623 9 24 9S6.292 15.37 4 24Z"></svg:path><svg:path stroke-linecap="round" d="M40 24h4m-30 0h20M4 24h4m9-4v8m14-8v8m-7-8v8"></svg:path></svg:g>`,
})
export class IconParkOutlineRugbyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
