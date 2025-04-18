import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRequestChangesIcon],svg[codicon-request-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.71 1.29l3 3L14 5v9l-1 1H4l-1-1V2l1-1h6zM4 14h9V5l-3-3H4zm4-8H6v1h2v2h1V7h2V6H9V4H8zm-2 5h5v1H6z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconRequestChangesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
