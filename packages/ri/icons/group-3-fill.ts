import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGroup3FillIcon],svg[ri-group-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M2 21v-4.5a4.5 4.5 0 1 1 9 0V21zm15.5-10a4 4 0 1 1 0-8a4 4 0 0 1 0 8M13 21v-4.5a4.5 4.5 0 1 1 9 0V21z"></svg:path>`,
})
export class RiGroup3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
