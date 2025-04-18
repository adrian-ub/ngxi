import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGirlIcon],svg[icon-park-solid-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27.23 16h-6.46L10 36h28z"></svg:path><svg:path d="M27 36v8m-6-8v8"></svg:path></svg:g>`,
})
export class IconParkSolidGirlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
