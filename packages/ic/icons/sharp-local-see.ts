import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpLocalSeeIcon],svg[ic-sharp-local-see-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="3.2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 4h-5.17L15 2H9L7.17 4H2v16h20zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcSharpLocalSeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
