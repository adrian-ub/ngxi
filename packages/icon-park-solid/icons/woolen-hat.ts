import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWoolenHatIcon],svg[icon-park-solid-woolen-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="10" x="4" y="34" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 26v8m9-8v8m9-8v8"></svg:path><svg:circle cx="24" cy="8" r="4" fill="currentColor"></svg:circle><svg:path d="M8 34c0-8.25 1-22 16-22s16 13.75 16 22"></svg:path></svg:g>`,
})
export class IconParkSolidWoolenHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
