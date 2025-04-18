import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink03Icon],svg[hugeicons-unlink-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.523 14.437l4.914-4.913m6.578 6.485h-2.003m-3.006 5.01v-2.004M2.982 7.992h2.004m3.006-5.01v2.004m7.115 7.583c1.14.74 2.308.542 3.163-.312l2.994-2.995a2.506 2.506 0 0 0 0-3.543l-2.985-2.986a2.504 2.504 0 0 0-3.543 0l-2.994 2.995c-.702.702-1.107 2.036-.277 3.182m1.104 6.199c.739 1.14.542 2.309-.313 3.163l-2.994 2.995a2.504 2.504 0 0 1-3.542 0l-2.985-2.986a2.506 2.506 0 0 1 0-3.543l2.994-2.995c.702-.702 2.035-1.107 3.182-.277" color="currentColor"></svg:path>`,
})
export class HugeiconsUnlink03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
