import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPin02Icon],svg[hugeicons-pin-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 16.75v5M8 6.042c0-.271 0-.407.013-.52a2 2 0 0 1 1.758-1.759c.114-.013.25-.013.52-.013h3.417c.271 0 .407 0 .52.013a2 2 0 0 1 1.759 1.758c.013.114.013.25.013.52c0 .088 0 .131-.003.172a1 1 0 0 1-.48.774c-.034.021-.073.04-.15.08l-.262.13c-.403.202-.605.303-.737.459a1 1 0 0 0-.216.442c-.042.2.002.422.09.864L15 12.75h.333c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H7.333c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C6 15.882 6 15.727 6 15.417c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414c.255-.068.565-.068 1.185-.068H9l.758-3.788c.088-.442.132-.663.09-.864a1 1 0 0 0-.216-.442c-.132-.156-.334-.257-.737-.459l-.262-.13a2 2 0 0 1-.15-.08a1 1 0 0 1-.48-.774C8 6.173 8 6.129 8 6.042" color="currentColor"></svg:path>`,
})
export class HugeiconsPin02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
