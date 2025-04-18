import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBottomLeftSolidIcon],svg[teenyicons-bottom-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.854 1.854L2.707 13H7v1H1V8h1v4.293L13.146 1.146z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBottomLeftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
