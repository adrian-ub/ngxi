import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTableSolidIcon],svg[teenyicons-table-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H4v4H0zM0 5v8.5A1.5 1.5 0 0 0 1.5 15H4V5zm5 10h8.5a1.5 1.5 0 0 0 1.5-1.5V5H5zM15 4V1.5A1.5 1.5 0 0 0 13.5 0H5v4z"></svg:path>`,
})
export class TeenyiconsTableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
