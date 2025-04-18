import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetChineseIcon],svg[hugeicons-alphabet-chinese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.023 14h11m-9.5-5h6.236c.463 0 .694 0 .752.16c.186.518-1.756 2.254-2.054 2.598c-.489.563-.733.845-.862 1.204c-.128.358-.128.756-.128 1.553v3.56c0 1.663-.953 2.925-2.535 2.925M5.016 8c-.076-.74.05-2.137 1.993-2h10.465c.638.037 1.722.46 1.495 2m-7.973-5c.6.313 1.674 1.515 1.993 3" color="currentColor"></svg:path>`,
})
export class HugeiconsAlphabetChineseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
