import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHandheldIcon],svg[icon-park-solid-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 18v26H6V18"></svg:path><svg:path fill="currentColor" d="M42 4H6v14h36z"></svg:path><svg:path stroke-linecap="round" d="M16 27v8m-4-4h8"></svg:path><svg:path fill="currentColor" d="M32 35a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g>`,
})
export class IconParkSolidHandheldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
