import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsReply16Icon],svg[qlementine-icons-reply-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.85 2.85a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0-.147.354a.5.5 0 0 0 .147.354l4 4a.5.5 0 1 0 .708-.708L1.7 6.992h7.79c.939 0 1.62 0 2.15.037c.532.036.888.107 1.18.23a3.5 3.5 0 0 1 1.89 1.89c.123.296.193.652.23 1.18c.037.537.037 1.22.037 2.15a.5.5 0 0 0 1 0v-.019c0-.916 0-1.63-.04-2.2c-.04-.583-.121-1.06-.302-1.5a4.5 4.5 0 0 0-2.44-2.44c-.44-.182-.916-.264-1.5-.303c-.575-.04-1.29-.04-2.2-.04H1.68l3.15-3.15z"></svg:path>`,
})
export class QlementineIconsReply16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
