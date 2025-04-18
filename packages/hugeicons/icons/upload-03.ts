import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload03Icon],svg[hugeicons-upload-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.938 10c-.691.005-1.107.026-1.438.114c-1.508.4-2.54 1.75-2.499 3.27c.012.441.18.986.515 2.075c.807 2.62 2.164 4.895 5.202 5.44c.559.101 1.188.101 2.445.101h1.674c1.257 0 1.886 0 2.445-.1c3.038-.546 4.395-2.821 5.202-5.441c.335-1.09.503-1.634.515-2.074c.04-1.521-.991-2.872-2.499-3.271c-.33-.088-.747-.109-1.437-.114M12 3v11m0-11c.468 0 .824.438 1.536 1.314L14.5 5.5M12 3c-.468 0-.824.438-1.536 1.314L9.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
