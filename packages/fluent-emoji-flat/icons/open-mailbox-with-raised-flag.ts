import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOpenMailboxWithRaisedFlagIcon],svg[fluent-emoji-flat-open-mailbox-with-raised-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7D4533" d="M16.81 30.04V23.4L14.5 22l-2.67 1.4v6.64z"></svg:path><svg:path fill="#5092FF" d="M21.65 7H7.84L11 23.61h14.99a1.5 1.5 0 0 0 1.5-1.5v-9.27C27.48 9.61 24.87 7 21.65 7"></svg:path><svg:path fill="#3F5FFF" d="M7.84 7C4.61 7 2 9.61 2 12.84v9.27a1.5 1.5 0 0 0 1.5 1.5h8.67a1.5 1.5 0 0 0 1.5-1.5v-9.27C13.67 9.61 11.06 7 7.84 7"></svg:path><svg:path fill="#321B41" d="M7.84 8A4.834 4.834 0 0 0 3 12.84v9.27c0 .276.224.49.5.49h1.133l7.89-10.95A4.83 4.83 0 0 0 7.84 8"></svg:path><svg:path fill="#F92F60" d="M24.132 2h-5.264c-.475 0-.868.369-.868.816v2.368c0 .447.393.816.869.816h5.262c.476 0 .869-.369.869-.816V2.816c0-.447-.393-.816-.869-.816"></svg:path><svg:path fill="#D3D3D3" d="M17.21 2.58c0-.67.54-1.21 1.21-1.21s1.21.54 1.21 1.21v8.904A2.42 2.42 0 0 1 18.42 16a2.42 2.42 0 0 1-1.21-4.516z"></svg:path><svg:path fill="#E1D8EC" d="M12.607 12.056h-8.03A.565.565 0 0 0 4 12.61v8.89c0 .308.257.555.577.555h8.093V12.84q0-.402-.063-.784"></svg:path><svg:path fill="#CDC4D6" d="M12.623 12.16H4.577a.565.565 0 0 0-.577.556v.572l7.309 4.482a1.33 1.33 0 0 0 1.361.013V12.84q0-.346-.047-.68"></svg:path><svg:path fill="#F3EEF8" d="M12.513 11.61H4.577a.565.565 0 0 0-.577.556v.572l7.309 4.482a1.33 1.33 0 0 0 1.361.013V12.84q-.001-.639-.157-1.23m.157 6.173a1.33 1.33 0 0 1-1.361-.013l-.641-.393L4 21.467v.577c0 .302.257.55.577.555h7.697a.5.5 0 0 0 .396-.489z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOpenMailboxWithRaisedFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
