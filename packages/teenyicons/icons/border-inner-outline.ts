import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBorderInnerOutlineIcon],svg[teenyicons-border-inner-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 1.5h1m8 0h1m2 0h1m-1 3h1m-1 6h1m-1 3h1m-4 0h1m-7 0h1m-4 0h1m-1-3h1m-1-6h1m2-3h1m-4 6h13M7.5 1v13"></svg:path>`,
})
export class TeenyiconsBorderInnerOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
