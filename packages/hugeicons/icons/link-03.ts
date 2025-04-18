import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLink03Icon],svg[hugeicons-link-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.52 14.436l4.914-4.913m-1.865 5.586c.74 1.14.542 2.309-.313 3.164l-2.995 2.995a2.505 2.505 0 0 1-3.543 0l-2.986-2.986a2.505 2.505 0 0 1 0-3.543l2.995-2.996c.702-.702 2.036-1.107 3.183-.277m6.198 1.103c1.14.74 2.31.542 3.164-.312l2.995-2.996a2.505 2.505 0 0 0 0-3.543l-2.986-2.986a2.505 2.505 0 0 0-3.543 0l-2.995 2.995c-.702.702-1.107 2.036-.277 3.183" color="currentColor"></svg:path>`,
})
export class HugeiconsLink03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
