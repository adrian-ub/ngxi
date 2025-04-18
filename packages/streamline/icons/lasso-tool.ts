import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLassoToolIcon],svg[streamline-lasso-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.123 12.709c1.518 0 1.897-1.073 1.897-1.61c0-.535-.38-1.608-1.897-1.608c-1.518 0-1.897 1.073-1.897 1.609s.38 1.609 1.897 1.609"></svg:path><svg:path d="M7 9.806C1.8 9.806.5 6.744.5 5.213C.5 3.683 1.8.621 7 .621s6.5 3.062 6.5 4.592c0 1.531-1.3 4.593-6.5 4.593m-1.414.226c1.01 1.147 1.683 1.912 1.68 3.345"></svg:path></svg:g>`,
})
export class StreamlineLassoToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
