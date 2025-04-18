import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGlobeIcon],svg[gg-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.853 8a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" clip-rule="evenodd"></svg:path><svg:path d="M5 12.13a8 8 0 0 0 5.941 3.819V18H8.853v2h6v-2h-1.912v-2.073A8.002 8.002 0 0 0 18.63 3.745l-1.704 1.048a6 6 0 1 1-10.221 6.288z"></svg:path></svg:g>`,
})
export class GgGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
