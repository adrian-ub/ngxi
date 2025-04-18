import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYoga03Icon],svg[hugeicons-yoga-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 10c0 3.866 3 7 3 7s3-3.134 3-7s-3-7-3-7s-3 3.134-3 7"></svg:path><svg:path d="M6.33 8C4.115 7.046 2 7 2 7s.096 4.381 2.857 7.143S12 17 12 17s4.381-.096 7.143-2.857S22 7 22 7s-2.114.046-4.33 1m-5.65 9c-.166 1.333.64 4 3.494 4c1.995 0 2.993-2 6.486 0c-.4-2-1.2-3.28-2.367-4m-7.654 0c.167 1.333-.64 4-3.492 4C6.49 21 5.493 19 2 21c.4-2 1.2-3.28 2.367-4"></svg:path></svg:g>`,
})
export class HugeiconsYoga03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
