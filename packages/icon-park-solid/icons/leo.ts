import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLeoIcon],svg[icon-park-solid-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="13" cy="27" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 21c0-5.5 2-16 11-16c4.5 0 12.72 2.332 9.536 15.561c-.28 1.166-1.382 3.414-1.382 3.414l-1.604 3.602c-1.659 3.341-3.802 11.877 2.986 15.034c2.058.957 6.481.339 7.464-4.01"></svg:path></svg:g>`,
})
export class IconParkSolidLeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
