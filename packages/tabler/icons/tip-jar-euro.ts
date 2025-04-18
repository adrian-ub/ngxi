import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTipJarEuroIcon],svg[tabler-tip-jar-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12zm6 9H9"></svg:path><svg:path d="M14 10.172a3 3 0 1 0 0 5.656"></svg:path></svg:g>`,
})
export class TablerTipJarEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
