import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSurfsharkIcon],svg[tabler-brand-surfshark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.954 9.447c-.237-6.217 0-6.217-6-6.425c-5.774-.208-6.824 1-7.91 5.382C3.16 20.22 2.199 23.12 10.836 19.602c9.392-3.831 9.297-5.382 9.114-10.155z"></svg:path><svg:path d="M8 16h.452c1.943.007 3.526-1.461 3.543-3.286v-2.428c.018-1.828 1.607-3.298 3.553-3.286H16"></svg:path></svg:g>`,
})
export class TablerBrandSurfsharkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
