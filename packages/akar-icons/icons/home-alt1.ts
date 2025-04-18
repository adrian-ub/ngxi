import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsHomeAlt1Icon],svg[akar-icons-home-alt1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></svg:path><svg:path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9z"></svg:path></svg:g>`,
})
export class AkarIconsHomeAlt1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
