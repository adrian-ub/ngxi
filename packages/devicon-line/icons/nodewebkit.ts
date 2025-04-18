import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineNodewebkitIcon],svg[devicon-line-nodewebkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M115.1 28.4L66.9.6C65.8 0 64.4-.3 63-.3s-2.8.3-3.9.9L10.9 28.4C8.7 29.7 7 32.7 7 35.1v55.7c0 2.5 1.7 5.5 3.9 6.7l48.2 27.9c1.1.6 2.5.9 3.9.9s2.8-.3 3.9-.9l48.2-27.9c2.1-1.2 3.9-4.2 3.9-6.7V35.1c0-2.4-1.7-5.4-3.9-6.7zm.9 62.5c0 1.4-1.2 3.4-2.4 4.1l-48.2 27.9c-.6.3-1.5.5-2.4.5c-.9 0-1.8-.2-2.4-.5L12.4 95c-1.2-.7-2.4-2.7-2.4-4.1V35.1c0-1.4 1.2-3.4 2.4-4.1L60.6 3.2c.6-.3 1.5-.5 2.4-.5c.9 0 1.8.2 2.4.5L113.6 31c1.2.7 2.4 2.7 2.4 4.1v55.8zM67 60.7c-.8-1.3-2.1-2.4-3.7-2.5L63 58c-2.4 0-4.4 2.1-4.6 4.5c-.1.9.1 1.9.6 2.7c.8 1.3 2.1 2.2 3.7 2.3h.3c2.4 0 4.4-1.9 4.6-4.3c0-.8-.2-1.7-.6-2.5zm-4 6.6h-.3c-1.4-.1-2.7-.9-3.5-2.1c-.4-.7-.6-1.4-.6-2.3c.2-2.3 2-3.9 4.3-3.9l.3-.2c1.4.1 2.7.8 3.5 2.1c.4.7.6 1.6.6 2.4c-.1 2.3-2 4-4.3 4zm1.1 1.2z"></svg:path><svg:circle cx="63" cy="63" r="1.5"></svg:circle><svg:path d="M63 69h-.4c-2-.1-3.9-1.2-4.9-3c-.6-1.1-.9-2.2-.8-3.5c.1-1.4.7-2.7 1.6-3.7L19 88.9l45.4-20v-.1c-.5.2-.9.2-1.4.2zm-1.5-11.9c.6-.1 1.2-.2 1.9-.2c2 .1 3.9 1.3 4.9 3c.6 1.1.9 2.3.8 3.5c-.1 1.5-.7 2.8-1.7 3.8l39.9-29.4l-45.8 19.3z"></svg:path></svg:g>`,
})
export class DeviconLineNodewebkitIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
