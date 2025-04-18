import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowUpOutlineIcon],svg[lsicon-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.979 12.979v-10m3.5 3.25l-3.5-3.5l-3.5 3.5"></svg:path>`,
})
export class LsiconArrowUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
