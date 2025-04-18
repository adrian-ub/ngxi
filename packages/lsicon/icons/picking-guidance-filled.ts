import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingGuidanceFilledIcon],svg[lsicon-picking-guidance-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .447.276l5.5 11a.5.5 0 0 1-.618.694L8 12.032L2.67 13.97a.5.5 0 0 1-.617-.694l5.5-11A.5.5 0 0 1 8 2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPickingGuidanceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
