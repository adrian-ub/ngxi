import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFormDuotoneIcon],svg[lets-icons-form-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M5.293 5.293C5 5.586 5 6.057 5 7v10c0 1.886 0 2.828.586 3.414c.326.327.764.471 1.414.535V19.5a1.5 1.5 0 0 1 3 0V21h4v-1.5a1.5 1.5 0 0 1 3 0v1.45c.65-.065 1.088-.21 1.414-.536C19 19.828 19 18.886 19 17V7c0-.943 0-1.414-.293-1.707S17.943 5 17 5H7c-.943 0-1.414 0-1.707.293" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M8.5 9.5h7m-7 3h4m-4 3h6"></svg:path></svg:g>`,
})
export class LetsIconsFormDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
