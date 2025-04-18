import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatUnlockIcon],svg[hugeicons-bubble-chat-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2.047A11 11 0 0 0 12 2C6.478 2 2 6.284 2 11.567c0 2.538 1.033 4.845 2.719 6.556c.371.377.619.892.519 1.422a5.3 5.3 0 0 1-1.087 2.348a6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386s.39.018.848.104c.638.12 1.286.18 1.935.18c4.83 0 9.065-3.277 10-7.634"></svg:path><svg:path d="M16.531 5.36V3.952A1.96 1.96 0 0 1 18.5 2c.489 0 .936.177 1.28.469M17.844 11h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712C22 9.699 22 9.193 22 8.18s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712C15 6.661 15 7.167 15 8.18s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205m-5.848 1h.008M8 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
