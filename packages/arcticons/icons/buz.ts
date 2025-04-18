import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBuzIcon],svg[arcticons-buz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="34.07" cy="24.705" r="2.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.029 29.638v4.834a2.93 2.93 0 0 0 2.93 2.93h0a2.93 2.93 0 0 0 2.93-2.93v-4.835m0 4.835v2.93m3.251-7.765H37l-5.86 7.765H37m-21.165-5.86a2.93 2.93 0 1 1 0 5.86H11v-11.72h4.835a2.93 2.93 0 1 1 0 5.86m0 0H11"></svg:path>`,
})
export class ArcticonsBuzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
