import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMouseRightClick04Icon],svg[hugeicons-mouse-right-click-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 6V2m0 20c6 0 7.5-4.51 7.5-10S16.5 2 10.5 2S3 6.51 3 12s1.5 10 7.5 10"></svg:path><svg:path d="M12 7.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C11.199 6 10.966 6 10.5 6s-.699 0-.883.076a1 1 0 0 0-.54.541C9 6.801 9 7.034 9 7.5v2c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C12 10.199 12 9.966 12 9.5zM19 2c1.055 1.132 1.765 2.501 2 4"></svg:path></svg:g>`,
})
export class HugeiconsMouseRightClick04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
