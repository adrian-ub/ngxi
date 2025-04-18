import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedStar16Icon],svg[octicon-feed-star-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432l-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892l-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39l-1.2-2.432a.47.47 0 0 0-.176-.195"></svg:path>`,
})
export class OcticonFeedStar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
