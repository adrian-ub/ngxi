import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScreenshotIcon],svg[icon-park-outline-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M40.062 8C24 28.433 15.805 38.68 14.242 40.243a6 6 0 0 1-8.485 0"></svg:path><svg:path d="M38 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M42.242 40.243a6 6 0 0 1-8.485 0C32.195 38.68 24 28.446 8 8"></svg:path></svg:g>`,
})
export class IconParkOutlineScreenshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
