import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[unjsUnheadIcon],svg[unjs-unhead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C33" d="m16.99 9.553l7 12.124a.94.94 0 0 1-.825 1.35h-14a.92.92 0 0 1-.825-1.35l7-12.124a.91.91 0 0 1 1.65 0"></svg:path><svg:path fill="#F44336" d="m16.15 10.753l6.375 11.05a.845.845 0 0 1-.75 1.224H9.025a.837.837 0 0 1-.843-.837a.9.9 0 0 1 .093-.388l6.375-11.05a.818.818 0 0 1 1.5 0"></svg:path><svg:path fill="#FF8A80" d="M15.18 11.963c-.255.285-4.697 7.745-4.697 7.745s-.38.572.062.92c.445.35.857 0 1.047-.285s4.223-6.983 4.38-7.3a1.11 1.11 0 0 0-.157-1.08c-.223-.223-.475-.223-.635 0"></svg:path></svg:g>`,
})
export class UnjsUnheadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
