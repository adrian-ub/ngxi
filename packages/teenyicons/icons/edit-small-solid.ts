import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEditSmallSolidIcon],svg[teenyicons-edit-small-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.854 4.146a.5.5 0 0 0-.708 0L4 8.293V10.5a.5.5 0 0 0 .5.5h2.207l4.147-4.146a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class TeenyiconsEditSmallSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
