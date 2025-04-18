import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCoPresentIcon],svg[ic-sharp-co-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v10h2V5h18v16h2z"></svg:path><svg:circle cx="9" cy="10" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66"></svg:path>`,
})
export class IcSharpCoPresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
