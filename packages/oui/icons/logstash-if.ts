import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiLogstashIfIcon],svg[oui-logstash-if-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.918 9.799l-4.82 4.819l2.88-.43l.148.987L0 15.943l.768-5.126l.988.148l-.453 3.033l4.936-4.935a2.003 2.003 0 0 1 1.265-2.885V0h1v6.178a2.003 2.003 0 0 1 1.263 2.884l4.865 4.866l-.443-2.963l.988-.147l.768 5.126l-5.127-.769l.15-.988l2.95.441l-4.83-4.83c-.312.203-.685.32-1.085.32s-.773-.117-1.085-.32"></svg:path>`,
})
export class OuiLogstashIfIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
