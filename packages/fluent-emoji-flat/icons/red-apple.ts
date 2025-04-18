import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRedAppleIcon],svg[fluent-emoji-flat-red-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M10.25 2H4.22a5.92 5.92 0 0 0 5.92 5.92h6.03C16.18 4.66 13.52 2 10.25 2"></svg:path><svg:path fill="#F8312F" d="M18.09 7.38c-1.34.57-2.86.57-4.2 0c-4.2-1.77-9.04.26-10.72 4.51a16.72 16.72 0 0 0 0 12.29a9.227 9.227 0 0 0 11.06 5.49c1.15-.32 2.37-.32 3.52 0a9.203 9.203 0 0 0 11.06-5.49c1.56-3.95 1.56-8.34 0-12.29c-1.67-4.25-6.51-6.28-10.72-4.51"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRedAppleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
