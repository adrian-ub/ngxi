import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenElaIcon],svg[token-ela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.522 4.125l4.493 2.595l4.583-2.595L21 6.72L12.015 12L3 6.72zm0 7.875l4.493 2.595L16.598 12L21 14.595l-8.985 5.28L3 14.595z"></svg:path>`,
})
export class TokenElaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
