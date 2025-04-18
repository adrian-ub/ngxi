import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareLockCheck01Icon],svg[hugeicons-square-lock-check-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 20s1 0 2 2c0 0 3.177-5 6-6m-4-2a34 34 0 0 0-.206-1.845c-.225-1.67-1.614-2.979-3.304-3.056A96 96 0 0 0 10.032 9a95 95 0 0 0-4.458.1c-1.69.076-3.08 1.385-3.305 3.055C2.122 13.245 2 14.362 2 15.5s.122 2.255.269 3.345c.226 1.67 1.615 2.979 3.305 3.056a96 96 0 0 0 5.926.089"></svg:path><svg:path d="M5.5 9V6.5a4.5 4.5 0 0 1 9 0V9"></svg:path></svg:g>`,
})
export class HugeiconsSquareLockCheck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
