import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobephotoshopmixIcon],svg[arcticons-adobephotoshopmix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40 5.5H7a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z"></svg:path><svg:circle cx="21" cy="21" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.5" cy="26.5" r="7.5" fill="none" stroke="currentColor" stroke-dasharray="1 1.78" stroke-dashoffset="1.6" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAdobephotoshopmixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
