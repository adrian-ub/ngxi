import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconConstituteOutlineIcon],svg[lsicon-constitute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7.5 2v12m3-7v6M13 7H8M7 9H2m.5-6.5h11v11h-11z"></svg:path>`,
})
export class LsiconConstituteOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
