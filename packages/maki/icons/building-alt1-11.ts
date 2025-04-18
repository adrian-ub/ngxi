import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBuildingAlt111Icon],svg[maki-building-alt1-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 9.5v-5c0-.3-.2-.5-.5-.5H6V1L3 2v7.5H2v.5h7v-.5H8zm-3 0H4V3h1v6.5z" fill="currentColor"></svg:path>`,
})
export class MakiBuildingAlt111Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
