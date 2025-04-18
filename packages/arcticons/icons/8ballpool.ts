import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons8ballpoolIcon],svg[arcticons-8ballpool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.8 20.65a3.38 3.38 0 0 0 3-3.75h0a3.39 3.39 0 0 0-3.75-3l-2.19.25a3.4 3.4 0 0 0-3 3.76h0a3.4 3.4 0 0 0 3.76 3l2.18-.26l-2.18.26a3.39 3.39 0 0 0-3 3.75h0a3.4 3.4 0 0 0 3.76 3l2.18-.26a3.39 3.39 0 0 0 3-3.75h0a3.4 3.4 0 0 0-3.76-3"></svg:path><svg:circle cx="23.1" cy="21.53" r="12.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons8ballpoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
