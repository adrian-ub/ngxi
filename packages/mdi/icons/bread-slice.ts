import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBreadSliceIcon],svg[mdi-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 3.36 10 7.5c0 1.69-.74 3.25-2 4.5v8H4v-8c-1.26-1.25-2-2.81-2-4.5C2 5.36 6.5 2 12 2M8 18h4v-4H8z"></svg:path>`,
})
export class MdiBreadSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
