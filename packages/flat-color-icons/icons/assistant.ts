import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAssistantIcon],svg[flat-color-icons-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FFA726"><svg:circle cx="10" cy="26" r="4"></svg:circle><svg:circle cx="38" cy="26" r="4"></svg:circle></svg:g><svg:path fill="#FFB74D" d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z"></svg:path><svg:path fill="#FF5722" d="M24 3C14.6 3 7 10.6 7 20v3.4L9 25v-3l21-9.8l9 9.8v3l2-1.6V20c0-8-5.7-17-17-17"></svg:path><svg:g fill="#784719"><svg:circle cx="31" cy="26" r="2"></svg:circle><svg:circle cx="17" cy="26" r="2"></svg:circle></svg:g><svg:path fill="#757575" d="M43 24c-.6 0-1 .4-1 1v-7c0-8.8-7.2-16-16-16h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c7.7 0 14 6.3 14 14v10c0 .6.4 1 1 1s1-.4 1-1v2c0 3.9-3.1 7-7 7H24c-.6 0-1 .4-1 1s.4 1 1 1h11c5 0 9-4 9-9v-5c0-.6-.4-1-1-1"></svg:path><svg:g fill="#37474F"><svg:path d="M43 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2"></svg:path><svg:circle cx="24" cy="38" r="2"></svg:circle></svg:g>`,
})
export class FlatColorIconsAssistantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
