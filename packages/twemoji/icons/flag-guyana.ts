import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagGuyanaIcon],svg[twemoji-flag-guyana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009E49" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#FFF" d="M1.808 5.654a4 4 0 0 0-.44.334v24.024q.209.182.441.335L36 18zq0-.002 0 0"></svg:path><svg:path fill="#FCD116" d="M3.168 28.712L32.5 18L3.168 7.288z"></svg:path><svg:path fill="#141414" d="M18 18L3.168 7.288l-1.8-1.3c-.31.271-.577.589-.791.942l.018 22.126c.214.354.463.684.773.955l1.8-1.3z"></svg:path><svg:path fill="#CE1126" d="m.577 6.93l-.001.002A4 4 0 0 0 0 9v18c0 .757.229 1.453.594 2.057L16 18z"></svg:path>`,
})
export class TwemojiFlagGuyanaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
