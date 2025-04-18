import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMbestyleIcon],svg[arcticons-mbestyle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.658 37.556h7.365v3.262A3.68 3.68 0 0 1 22.34 44.5h0a3.68 3.68 0 0 1-3.682-3.682zm6.818-32.271h-6.271c-8.501 0-12 3.582-12 8v21.271a3 3 0 0 0 3 3h24.27a3 3 0 0 0 3-3V13.285c0-4.418-3.368-8-12-8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.476 37.556h3.32a3 3 0 0 0 3-3V13.285c0-4.418-3.37-8-12-8h-3.32"></svg:path><svg:circle cx="17.521" cy="15.776" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="27.16" cy="15.776" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.157 19.307a2.933 2.933 0 0 1-5.633 0"></svg:path><svg:circle cx="13.927" cy="22.042" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.66" cy="22.042" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMbestyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
