import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignEqualThinIcon],svg[iconamoon-sign-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 9h12M6 15h12"></svg:path>`,
})
export class IconamoonSignEqualThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
