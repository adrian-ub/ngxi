import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalSplitOutlineIcon],svg[lsicon-vertical-split-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 2.5h12m-12 11h12m-10.5-4v-3h9v3z"></svg:path>`,
})
export class LsiconVerticalSplitOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
