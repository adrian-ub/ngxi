import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEsewaIcon],svg[arcticons-esewa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.69 27.75a7.91 7.91 0 0 1-5.1 6.12h0a7.94 7.94 0 0 1-10.16-4.74l-1.76-4.84a7.94 7.94 0 0 1 4.74-10.16h0a7.94 7.94 0 0 1 10.16 4.74l.88 2.42l-14.9 5.42M45.5 24h-8"></svg:path>`,
})
export class ArcticonsEsewaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
