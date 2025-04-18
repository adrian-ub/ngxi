import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDataScreenOutlineIcon],svg[lsicon-data-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 12.5h12m-12-9h12m-12.5 7v-5c1.667.167 5.3.5 6.5.5s4.833-.333 6.5-.5v5c-1.667-.167-5.3-.5-6.5-.5s-4.833.333-6.5.5Z"></svg:path>`,
})
export class LsiconDataScreenOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
