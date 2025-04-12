import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsClubforceIcon],svg[simple-icons-clubforce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.4 0C.624 0 0 .624 0 1.4v21.2c0 .776.624 1.4 1.4 1.4h21.2c.776 0 1.4-.624 1.4-1.4V1.4c0-.776-.624-1.4-1.4-1.4Zm4.778 5.5h9.61l-2.83 2.112H8.331v3.472L6.18 12.72V5.5Zm11.644 1.317v7.415L11.96 18.5l-4.786-3.629l1.675-1.317l3.111 2.354l3.19-2.392l-3.23-2.234l1.834-1.355l1.955 1.355v-2.87Z"></svg:path>`
})
export class SimpleIconsClubforceIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
