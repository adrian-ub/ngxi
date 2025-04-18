import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSlidersIcon],svg[pepicons-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.5 4.75a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1Zm11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1Z"></svg:path><svg:path d="M12.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5Zm-10.25 7a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1Zm11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1Z"></svg:path><svg:path d="M12.75 15.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5Zm-10.25-8a1 1 0 0 1 1-1h1.625a1 1 0 0 1 0 2H3.5a1 1 0 0 1-1-1Zm6.5 0a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1Z"></svg:path><svg:path d="M7.75 10.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5Z"></svg:path></svg:g>`,
})
export class PepiconsSlidersIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
