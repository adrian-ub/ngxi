import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpGarageIcon],svg[ic-sharp-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m8.33 7.5l-.66 2h8.66l-.66-2z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69z"></svg:path>`,
})
export class IcSharpGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
