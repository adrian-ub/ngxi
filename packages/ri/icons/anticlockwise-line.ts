import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwiseLineIcon],svg[ri-anticlockwise-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m1 2v8h8v-8zm-6-.414l1.828-1.829l1.415 1.415L5 14.414L.757 10.172l1.415-1.415L4 10.586V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3z"></svg:path>`,
})
export class RiAnticlockwiseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
