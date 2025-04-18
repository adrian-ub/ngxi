import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLabelOutlineIcon],svg[lsicon-label-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 3.5h6m-7.5-2h9v13L8 12l-4.5 2.5z"></svg:path>`,
})
export class LsiconLabelOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
