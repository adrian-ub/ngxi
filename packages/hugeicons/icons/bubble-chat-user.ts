import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatUserIcon],svg[hugeicons-bubble-chat-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2.047A11 11 0 0 0 12 2C6.478 2 2 6.284 2 11.567c0 2.538 1.033 4.845 2.719 6.556c.371.377.619.892.519 1.422a5.3 5.3 0 0 1-1.087 2.348a6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386s.39.018.848.104c.638.12 1.286.18 1.935.18c4.83 0 9.065-3.277 10-7.634M11.996 12h.008M8 12h.009m12.175-8.21c0 .99-.785 1.792-1.753 1.792s-1.753-.802-1.753-1.791c0-.99.785-1.791 1.753-1.791s1.753.802 1.753 1.79"></svg:path><svg:path d="M14.964 9.396c.928-1.459 2.401-2.005 3.467-2.004s2.495.545 3.423 2.004c.06.095.076.21.022.309c-.217.393-.89 1.173-1.377 1.226c-.558.06-2.02.069-2.067.069c-.046 0-1.554-.009-2.113-.07c-.486-.052-1.16-.832-1.377-1.225a.3.3 0 0 1 .022-.309"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
