import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimDialpadIcon],svg[uim-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="3" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="15" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="6" cy="9" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="6" cy="3" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="6" cy="15" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="18" cy="9" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="18" cy="3" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="18" cy="15" r="2" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
