import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeotermIcon],svg[arcticons-neoterm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.204 30.247A4.47 4.47 0 0 0 16.127 32h2.369a3.996 3.996 0 0 0 3.99-4h0a3.996 3.996 0 0 0-3.99-4h-2.618a3.996 3.996 0 0 1-3.991-4h0a3.996 3.996 0 0 1 3.991-4h2.37a4.48 4.48 0 0 1 3.922 1.753M17.187 16v-2m0 20v-2m8.326 2h10.6"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNeotermIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
