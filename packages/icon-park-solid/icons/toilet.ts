import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidToiletIcon],svg[icon-park-solid-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.999 10h8v12h-8z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 35l-5 9h24l-5-9m2.999-13V5a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v17"></svg:path><svg:path d="M6.08 22.364A.3.3 0 0 1 6.372 22h35.254a.3.3 0 0 1 .292.364c-1.224 5.508-4.635 10.452-10 12.2C29.436 35.374 26.656 36 24 36s-5.436-.627-7.92-1.436c-5.365-1.749-8.776-6.692-10-12.2Z"></svg:path></svg:g>`,
})
export class IconParkSolidToiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
