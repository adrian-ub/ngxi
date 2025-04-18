import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTaskLineIcon],svg[ri-task-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5v16h14zM3 2.992C3 2.444 3.447 2 3.999 2h16a1 1 0 0 1 1 1L21 20.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm8.293 10.13l4.243-4.243l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414z"></svg:path>`,
})
export class RiTaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
