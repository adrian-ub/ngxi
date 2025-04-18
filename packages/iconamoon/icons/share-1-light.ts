import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonShare1LightIcon],svg[iconamoon-share-1-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.272 6.008A2 2 0 0 0 20 5a2 2 0 1 0-3.728 1.008m0 0l-8.544 4.984m0 0a2 2 0 1 0 0 2.016m0-2.016a2 2 0 0 1 0 2.016m0 0l8.544 4.984m0 0a2 2 0 1 1 3.454 2.014a2 2 0 0 1-3.454-2.014"></svg:path>`,
})
export class IconamoonShare1LightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
