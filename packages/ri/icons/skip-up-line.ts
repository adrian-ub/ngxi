import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipUpLineIcon],svg[ri-skip-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.914l4.793 4.793l1.414-1.414L12 11.086l-6.207 6.207l1.414 1.414zM6 7h12v2H6z"></svg:path>`,
})
export class RiSkipUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
