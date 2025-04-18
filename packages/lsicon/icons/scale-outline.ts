import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScaleOutlineIcon],svg[lsicon-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4.5 9a3.5 3.5 0 1 1 7 0M6.787 7.214L8.5 9m-6 4.5v-11h11v11z"></svg:path>`,
})
export class LsiconScaleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
