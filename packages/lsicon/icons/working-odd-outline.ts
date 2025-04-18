import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkingOddOutlineIcon],svg[lsicon-working-odd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 6.5h4m-4-2h6m-4 10H3.5v-13h9V7m1 4.5a3 3 0 1 1-3-3v3z"></svg:path>`,
})
export class LsiconWorkingOddOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
