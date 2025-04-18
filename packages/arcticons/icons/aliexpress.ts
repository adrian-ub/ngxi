import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAliexpressIcon],svg[arcticons-aliexpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.716 8.269a2.77 2.77 0 0 0-2.72-2.77h-26a2.77 2.77 0 0 0-2.73 2.77h0"></svg:path><svg:circle cx="13.126" cy="22.109" r="1.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.855" cy="22.109" r="1.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.296 23.999c1.072 5.907 6.73 9.825 12.637 8.752A10.87 10.87 0 0 0 34.685 24"></svg:path><svg:rect width="37" height="34.206" x="5.5" y="8.294" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsAliexpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
