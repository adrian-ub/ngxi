import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalSplitFilledIcon],svg[lsicon-vertical-split-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM3 6h10v4H3zm11 8H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalSplitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
