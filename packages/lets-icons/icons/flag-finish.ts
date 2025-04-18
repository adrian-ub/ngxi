import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlagFinishIcon],svg[lets-icons-flag-finish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 13V3.5c0-.236 0-.354.073-.427S5.264 3 5.5 3h4.096c.2 0 .3 0 .39.036c.09.037.161.106.305.245l1.488 1.438c.144.139.216.208.306.245c.09.036.19.036.39.036h6.195c.243 0 .364 0 .407.078s-.023.18-.155.384L16.174 9.73c-.084.132-.127.197-.127.271c0 .073.043.14.127.27l2.748 4.268c.132.204.197.306.155.384s-.164.078-.407.078h-6.196c-.2 0-.3 0-.39-.036c-.09-.037-.161-.106-.305-.245l-1.488-1.438c-.144-.139-.216-.208-.306-.245c-.09-.036-.19-.036-.39-.036zm0 0v6"></svg:path><svg:path fill="currentColor" d="M5 3.5v9c0 .236 0 .354.073.427S5.264 13 5.5 13h4.096c.2 0 .3 0 .39.036c.09.037.161.106.305.245l1.488 1.438c.144.139.216.208.306.245c.09.036.19.036.39.036h6.195c.243 0 .364 0 .407-.078s-.023-.18-.155-.384l-2.748-4.267c-.084-.132-.127-.198-.127-.271s.043-.14.127-.27l2.748-4.268c.132-.204.197-.306.155-.384S18.913 5 18.67 5h-6.196c-.2 0-.3 0-.39-.036c-.09-.037-.161-.106-.305-.245l-1.488-1.438c-.144-.139-.216-.208-.306-.245C9.895 3 9.795 3 9.595 3H5.5c-.236 0-.354 0-.427.073S5 3.264 5 3.5"></svg:path></svg:g>`,
})
export class LetsIconsFlagFinishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
