import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsCommentIcon],svg[vs-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 64q98 0 177 77t79 179v512q0 109-72.5 182.5T1408 1088H896l-512 512v-512H256q-113 0-184.5-72T0 832V320q0-109 73.5-182.5T256 64z"></svg:path>`,
})
export class VsCommentIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
