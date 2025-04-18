import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidKungfuIcon],svg[icon-park-solid-kungfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M11 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m20 18l8 6l-3 18m3-18l16-13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 16.8L27 8l-7 10l-4 9l-6 3"></svg:path></svg:g>`,
})
export class IconParkSolidKungfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
