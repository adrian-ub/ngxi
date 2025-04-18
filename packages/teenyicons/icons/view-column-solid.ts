import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsViewColumnSolidIcon],svg[teenyicons-view-column-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 15V0h1v15zm4 0V0h1v15zm4 0V0h1v15zm4 0V0h1v15z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsViewColumnSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
