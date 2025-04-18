import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingGuidanceOutlineIcon],svg[lsicon-picking-guidance-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 13.5L8 2.5l5.5 11l-5.5-2z"></svg:path>`,
})
export class LsiconPickingGuidanceOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
