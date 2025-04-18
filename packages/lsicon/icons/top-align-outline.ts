import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTopAlignOutlineIcon],svg[lsicon-top-align-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2 2.5h12m-10.5 2h3v9h-3zm6 0h3v7h-3z"></svg:path>`,
})
export class LsiconTopAlignOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
