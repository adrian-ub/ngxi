import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFemaleIcon],svg[bx-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14.948 7.684A1 1 0 0 0 14 7h-4a1 1 0 0 0-.948.684l-2 6l1.775.593L8 18h2v4h4v-4h2l-.827-3.724l1.775-.593z"></svg:path>`,
})
export class BxFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
