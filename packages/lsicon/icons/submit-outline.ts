import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSubmitOutlineIcon],svg[lsicon-submit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.005 13.5H2.5v-11h11V7m-6.89 3.986l2.511 2.511l4.52-4.52"></svg:path>`,
})
export class LsiconSubmitOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
