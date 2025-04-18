import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRecordIcon],svg[ix-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 107.836c82.475 0 149.333 66.859 149.333 149.333S338.475 406.503 256 406.503s-149.333-66.859-149.333-149.334c0-82.474 66.858-149.333 149.333-149.333m0 42.667c-58.91 0-106.667 47.756-106.667 106.666c0 58.911 47.757 106.667 106.667 106.667s106.667-47.756 106.667-106.667c0-58.91-47.757-106.666-106.667-106.666" clip-rule="evenodd"></svg:path>`,
})
export class IxRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
