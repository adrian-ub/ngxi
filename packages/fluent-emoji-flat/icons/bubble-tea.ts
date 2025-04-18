import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBubbleTeaIcon],svg[fluent-emoji-flat-bubble-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#83CBFF" d="M7.2 11L7 9l.2-.25h17.6L25 9l-.2 2l-.3.25h-17z"></svg:path><svg:path fill="#8D65C5" d="M17 2v9l-1 1l-1-1V2z"></svg:path><svg:path fill="#AEDDFF" d="M6 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path><svg:path fill="#BCA4EB" d="M17 7v2h-2V7z"></svg:path><svg:path fill="#F3AD61" d="M7.2 11h17.6L23 29c-.097.605-.5 1-1 1H10c-.5 0-.924-.437-1-1z"></svg:path><svg:path fill="#8C5543" d="M13.35 25.62a1.31 1.31 0 1 1 0-2.62a1.31 1.31 0 0 1 0 2.62m5.3 0a1.31 1.31 0 1 1 0-2.62a1.31 1.31 0 0 1 0 2.62m3.87 1.99a1.31 1.31 0 1 1-2.62 0a1.31 1.31 0 0 1 2.62 0m-6.26 1.31a1.31 1.31 0 1 1 0-2.62a1.31 1.31 0 0 1 0 2.62m-3.64-1.31a1.31 1.31 0 1 1-2.62 0a1.31 1.31 0 0 1 2.62 0"></svg:path><svg:path fill="#FFF3D7" d="m19.44 26.92l1.13-13.01a1 1 0 0 1 .99-.91c.58 0 1.04.5.99 1.08l-1.13 13.01c-.04.52-.47.91-.99.91c-.58 0-1.04-.5-.99-1.08"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBubbleTeaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
