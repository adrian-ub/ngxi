import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRecordFilledIcon],svg[ix-record-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 107.836c82.475 0 149.333 66.859 149.333 149.333S338.475 406.503 256 406.503s-149.333-66.859-149.333-149.334c0-82.474 66.858-149.333 149.333-149.333" clip-rule="evenodd"></svg:path>`,
})
export class IxRecordFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
