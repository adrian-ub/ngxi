import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare04Icon],svg[hugeicons-share-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.026 3a9.028 9.028 0 0 0 1.003 18A9.03 9.03 0 0 0 21 13"></svg:path><svg:path d="m21 6.025l-1-.002c-3.737-.01-5.605-.015-6.918.93c-.437.313-.82.695-1.135 1.131C11 9.395 11 11.264 11 15m10-8.975a.7.7 0 0 0-.175-.472C20.06 4.647 18.071 3 18.071 3M21 6.025a.7.7 0 0 1-.174.422C20.06 7.353 18.07 9 18.07 9"></svg:path></svg:g>`,
})
export class HugeiconsShare04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
