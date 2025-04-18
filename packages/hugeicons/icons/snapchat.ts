import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSnapchatIcon],svg[hugeicons-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.576 7.424a5.424 5.424 0 0 1 10.848 0c0 4.748.237 7.122 4.576 9.02c-2.222.556-2.778 1.112-3.333 3.334C14.777 19.778 14.222 22 12 22s-2.778-2.222-6.667-2.222C4.778 17.556 4.223 17 2 16.444c4.339-1.898 4.576-4.272 4.576-9.02"></svg:path><svg:path d="M2 16c3.824-2.083 3.824-4.05.956-7M22 16c-3.824-2.083-3.824-4.05-.956-7"></svg:path></svg:g>`,
})
export class HugeiconsSnapchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
