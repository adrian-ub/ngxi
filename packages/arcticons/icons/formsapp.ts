import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFormsappIcon],svg[arcticons-formsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.147" height="16.167" x="33.353" y="26.302" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.189" ry="2.189"></svg:rect><svg:rect width="9.147" height="37" x="19.457" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.189" ry="2.189"></svg:rect><svg:rect width="9.147" height="25.324" x="5.5" y="17.114" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.189" ry="2.189"></svg:rect>`,
})
export class ArcticonsFormsappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
