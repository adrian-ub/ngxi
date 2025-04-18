import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTypeSpecimenIcon],svg[ic-sharp-type-specimen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v16h16v-2H4z"></svg:path><svg:path fill="currentColor" d="M22 2H6v16h16zm-5.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9z"></svg:path><svg:path fill="currentColor" d="m13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z"></svg:path>`,
})
export class IcSharpTypeSpecimenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
