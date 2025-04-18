import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBottomRightSolidIcon],svg[teenyicons-bottom-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.854 1.146L13 12.293V8h1v6H8v-1h4.293L1.146 1.854z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBottomRightSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
