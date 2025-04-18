import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDataDisplayIcon],svg[icon-park-solid-data-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8"></svg:path><svg:path d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4"></svg:path><svg:path fill="currentColor" d="M22 8c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4"></svg:path><svg:path d="M32 6h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6m29 6v6m6 0H29"></svg:path><svg:path fill="currentColor" d="M44 38V26H26v12z"></svg:path></svg:g>`,
})
export class IconParkSolidDataDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
