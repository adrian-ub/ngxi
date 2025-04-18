import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSkullLineIcon],svg[majesticons-skull-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 16.657A8.96 8.96 0 0 1 3 11c0-4.97 4.03-8 9-8s9 3.03 9 8c0 2.143-.75 4.112-2 5.657m-14 0V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2.343m-14 0h1.5m12.5 0h-1.5"></svg:path><svg:circle cx="8" cy="12" r="1"></svg:circle><svg:path d="m11 16l1-2l1 2zm-2 3v2m3-2v2m3-2v2"></svg:path><svg:circle cx="16" cy="12" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsSkullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
