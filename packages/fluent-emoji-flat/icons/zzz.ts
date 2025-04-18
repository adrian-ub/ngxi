import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatZzzIcon],svg[fluent-emoji-flat-zzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489"></svg:path><svg:path fill="#83CBFF" d="M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1"></svg:path><svg:path fill="#AEDDFF" d="M3.042 21.713a1 1 0 0 1 1.245-.67l5 1.5A1 1 0 0 1 9.6 24.3l-4.21 3.158l2.806.561a1 1 0 0 1-.392 1.962l-5-1A1 1 0 0 1 2.4 27.2l4.415-3.311l-3.102-.931a1 1 0 0 1-.67-1.245"></svg:path></svg:g>`,
})
export class FluentEmojiFlatZzzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
