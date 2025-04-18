import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiSpinner2Icon],svg[ei-spinner-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="25" cy="40" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="32.5" cy="12" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="17.5" cy="38" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="17.5" cy="12" r="2" fill="currentColor" opacity=".93"></svg:circle><svg:circle cx="32.5" cy="38" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="10" cy="25" r="2" fill="currentColor" opacity=".65"></svg:circle><svg:circle cx="40" cy="25" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="12" cy="17.5" r="2" fill="currentColor" opacity=".86"></svg:circle><svg:circle cx="38" cy="32.5" r="2" fill="currentColor" opacity=".3"></svg:circle><svg:circle cx="12" cy="32.5" r="2" fill="currentColor" opacity=".44"></svg:circle><svg:circle cx="38" cy="17.5" r="2" fill="currentColor" opacity=".3"></svg:circle>`,
})
export class EiSpinner2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
