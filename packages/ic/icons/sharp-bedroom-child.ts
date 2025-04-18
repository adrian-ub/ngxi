import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBedroomChildIcon],svg[ic-sharp-bedroom-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.5h6v2H9zM7.51 12h9v2h-9z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18z"></svg:path>`,
})
export class IcSharpBedroomChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
