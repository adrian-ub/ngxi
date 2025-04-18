import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGatherOutlineIcon],svg[lsicon-gather-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9.5 2.5h4v11h-11v-11h4m7 6.5H10a2 2 0 1 1-4 0H2.5M8 2v5.5m0 0l2-2m-2 2l-2-2"></svg:path>`,
})
export class LsiconGatherOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
