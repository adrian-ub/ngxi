import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCallOffIcon],svg[tdesign-call-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.414 3L11.833 13.58q.764.662 1.617 1.211l1.86-1.859L22 14.42V23h-1a19.9 19.9 0 0 1-10.85-3.197a20 20 0 0 1-2.567-1.971L3 22.414L1.586 21L21 1.586zM9 16.415a18 18 0 0 0 2.237 1.71A17.9 17.9 0 0 0 20 20.972v-4.949l-4.053-.9l-2.174 2.175l-.663-.377A16 16 0 0 1 10.415 15zM1 2h8.58l1.487 6.69l-1.865 1.866l.297.504l-1.723 1.015l-1.084-1.839l2.184-2.183L7.976 4H3.027a17.9 17.9 0 0 0 3.097 9.138l.564.825l-1.652 1.128l-.564-.825A19.9 19.9 0 0 1 1 3z"></svg:path>`,
})
export class TdesignCallOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
