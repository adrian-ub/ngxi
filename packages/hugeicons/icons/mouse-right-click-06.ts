import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseRightClick06Icon],svg[hugeicons-mouse-right-click-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 5.5V2m0 10V9m0 13c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2S3 6.51 3 12s1.5 10 7.5 10M18 12H3m16-8.833L19.381 2m.59 3.567L21 6"></svg:path><svg:path d="M9 7c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077s.699 0 .883.076a1 1 0 0 1 .54.541C12 6.301 12 6.534 12 7v.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C11.199 9 10.966 9 10.5 9s-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 8.199 9 7.966 9 7.5z"></svg:path></svg:g>`,
})
export class HugeiconsMouseRightClick06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
