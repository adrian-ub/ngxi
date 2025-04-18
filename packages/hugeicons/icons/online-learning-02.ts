import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOnlineLearning02Icon],svg[hugeicons-online-learning-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v9.5"></svg:path><svg:path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"></svg:path><svg:path d="M20.5 17a2.5 2.5 0 0 0 0 5M8 7.374C9.149 6.504 10.52 6 11.995 6c1.478 0 2.854.508 4.005 1.382m-1.826 2.336a4.3 4.3 0 0 0-2.18-.594c-.779 0-1.516.211-2.17.588M12 12h.006"></svg:path></svg:g>`,
})
export class HugeiconsOnlineLearning02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
