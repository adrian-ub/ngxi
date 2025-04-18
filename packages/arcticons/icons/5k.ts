import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons5kIcon],svg[arcticons-5k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.658" cy="7.118" r="2.618" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.9 23.382l.102-6.862l10.273-3.512m13.902 9.982s-4.128-.078-6.488-1.742c-2.497-1.762-7.414-8.24-7.414-8.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.275 13.008l-5.188 22.585l-11.264-2.157"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.681 24.3l6.31 6.687l-.003 12.513"></svg:path>`,
})
export class Arcticons5kIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
