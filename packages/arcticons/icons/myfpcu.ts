import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyfpcuIcon],svg[arcticons-myfpcu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 42.5v-8h2.6c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7H17m12.7-.147c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.6v-2.7c0-1.5 1.2-2.7 2.7-2.6c1.5 0 2.6 1.2 2.6 2.6m2.1-2.7v5.3c0 1.5 1.2 2.7 2.6 2.7s2.7-1.2 2.7-2.7v-5.3M11 38.5h2.6m-2.6 4v-8h4M25 5.54H11.04v25.42h7.48v-7.98h6.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.2 22.98v-6.5h-6.68v-4.44h6.68v-6.5M30.32 12V5.5H37V12zm0 10.98v-6.5H37v6.5z"></svg:path>`,
})
export class ArcticonsMyfpcuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
