import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaximize02Icon],svg[hugeicons-maximize-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.863 12.66l2.135 1.831l2.666-10.227a1.72 1.72 0 0 1 3.339.83l-1.202 5.1l1.688.27c1.93.29 2.895.434 3.574.842c1.123.673 1.936 1.683 1.936 3.159c0 1.027-.254 1.717-.871 3.57c-.392 1.175-.587 1.762-.907 2.227a4 4 0 0 1-2.193 1.582c-.542.156-1.16.156-2.399.156h-1.05c-1.645 0-2.468 0-3.2-.302a4 4 0 0 1-.386-.183c-.696-.379-1.215-1.018-2.253-2.296L5.38 15.08a1.74 1.74 0 0 1-.008-2.186a1.74 1.74 0 0 1 2.49-.234m2.009-8.044s.246-2.22 0-2.463m0 0c-.318-.314-2.538-.05-2.538-.05m2.538.05l-2.97 2.942m-4.79 2.25s-.246 2.221 0 2.463m0 0c.318.314 2.539.05 2.539.05m-2.54-.05l2.971-2.942" color="currentColor"></svg:path>`,
})
export class HugeiconsMaximize02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
