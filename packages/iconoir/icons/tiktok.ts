import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTiktokIcon],svg[iconoir-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path><svg:path d="M10 12a3 3 0 1 0 3 3V6c.333 1 1.6 3 4 3"></svg:path></svg:g>`,
})
export class IconoirTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
