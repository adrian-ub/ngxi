import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCommentAltIcon],svg[el-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 60.509v729.264h211.064v210.992l328.929-210.992h484.071V60.509zm1072.243 160.306v91.767h35.989v520.062h-177.01v139.013l-205.329-131.7l-11.328-7.312H559.78l-143.028 91.768h270.785L952.3 1094.181l70.689 45.311v-215.08H1200V220.815z"></svg:path>`,
})
export class ElCommentAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
