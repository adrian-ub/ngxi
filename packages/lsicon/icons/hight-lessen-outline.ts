import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHightLessenOutlineIcon],svg[lsicon-hight-lessen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 7H3m10 2H3m5-3.5V1.707m0 0l2 2m-2-2l-2 2M8 14v-3.5m2 2l-2 2l-2-2"></svg:path>`,
})
export class LsiconHightLessenOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
