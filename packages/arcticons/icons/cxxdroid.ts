import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCxxdroidIcon],svg[arcticons-cxxdroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.642 21.288l-4 5.3m-9.819.239a5.713 5.713 0 0 1-5.816 5.653h0a5.713 5.713 0 0 1-5.816-5.653v-5.654a5.713 5.713 0 0 1 5.816-5.653h0a5.53 5.53 0 0 1 5.6 5.653h0m6.98.039l-4 5.3m4 0l-4-5.3m11.222 5.3l-4-5.3"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.764 4.373v8.555a2 2 0 0 0 2 2h8.724A21.5 21.5 0 0 0 32.764 4.373"></svg:path>`,
})
export class ArcticonsCxxdroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
