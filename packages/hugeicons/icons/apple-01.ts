import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsApple01Icon],svg[hugeicons-apple-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 5c-2.761 0-5 3.014-5 6.028c0 3.516.5 6.028 2.5 9.042c1.52 2.036 3.55 2.547 5.714 1.12a1.47 1.47 0 0 1 1.572 0c2.164 1.427 4.194.916 5.714-1.12c2-3.014 2.5-5.526 2.5-9.042C21 8.014 18.761 5 16 5c-1.425 0-2.711.785-3.622 1.633a.557.557 0 0 1-.756 0C10.712 5.785 9.425 5 8 5"></svg:path><svg:path d="M6 12c0-1.633.823-3.267 2-4m4-2c0-1.333.6-4 3-4"></svg:path></svg:g>`,
})
export class HugeiconsApple01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
