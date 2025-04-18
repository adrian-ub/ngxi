import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riParentLineIcon],svg[ri-parent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m2.5 6v-.5a2.5 2.5 0 0 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5zm-10 0v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4z"></svg:path>`,
})
export class RiParentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
