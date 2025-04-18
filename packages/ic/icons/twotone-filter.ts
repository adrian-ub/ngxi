import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFilterIcon],svg[ic-twotone-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h14V3H7zm4.25-5.53l1.96 2.36l2.75-3.54L19.5 15h-11z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-5.04-6.71l-2.75 3.54l-1.96-2.36L8.5 15h11z"></svg:path>`,
})
export class IcTwotoneFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
