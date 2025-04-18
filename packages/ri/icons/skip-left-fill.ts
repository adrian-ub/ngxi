import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkipLeftFillIcon],svg[ri-skip-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V6h2v12zm4-6l6-6v12z"></svg:path>`,
})
export class RiSkipLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
