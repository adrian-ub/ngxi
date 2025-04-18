import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBuildingAlt1Icon],svg[maki-building-alt1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13.5v-9c0-.3-.2-.5-.5-.5H9V1L5 2.1v11.4H2v.5h11v-.5zm-4 0V3h1v10.5z"></svg:path>`,
})
export class MakiBuildingAlt1Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
