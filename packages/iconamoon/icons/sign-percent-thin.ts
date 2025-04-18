import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignPercentThinIcon],svg[iconamoon-sign-percent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="16" cy="18" r="2"></svg:circle><svg:circle cx="8" cy="6" r="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 4L8 20"></svg:path></svg:g>`,
})
export class IconamoonSignPercentThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
