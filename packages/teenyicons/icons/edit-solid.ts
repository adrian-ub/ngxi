import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEditSolidIcon],svg[teenyicons-edit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.854.146a.5.5 0 0 0-.708 0L0 10.293V14.5a.5.5 0 0 0 .5.5h4.207L14.854 4.854a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class TeenyiconsEditSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
