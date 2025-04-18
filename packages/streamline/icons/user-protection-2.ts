import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserProtection2Icon],svg[streamline-user-protection-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.43a1 1 0 0 1-.72 0v0a9.67 9.67 0 0 1-6.14-9V1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.67 9.67 0 0 1-6.14 9.01"></svg:path><svg:path d="M2.837 10.73A5 5 0 0 1 7 8.5c1.737 0 3.267.886 4.164 2.23M7 7a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 7 7"></svg:path></svg:g>`,
})
export class StreamlineUserProtection2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
