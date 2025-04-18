import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBoyIcon],svg[icon-park-solid-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 36H18l-8-20h28z"></svg:path><svg:path d="M27 36v8m-6-8v8"></svg:path></svg:g>`,
})
export class IconParkSolidBoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
