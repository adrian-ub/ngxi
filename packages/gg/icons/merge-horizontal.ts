import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMergeHorizontalIcon],svg[gg-merge-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.976l4.243-4.243l-1.415-1.414L12 6.147L9.172 3.32L7.757 4.733zM5 12a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m7 3.024l-4.243 4.243l1.415 1.414L12 17.853l2.828 2.828l1.415-1.414z"></svg:path>`,
})
export class GgMergeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
