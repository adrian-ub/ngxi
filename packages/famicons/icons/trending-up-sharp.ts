import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsTrendingUpSharpIcon],svg[famicons-trending-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m48 368l144-144l96 96l160-160"></svg:path>`,
})
export class FamiconsTrendingUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
