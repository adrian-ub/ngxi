import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaChatIcon],svg[gala-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="16"><svg:path d="M 48.004588,16.00078 H 207.99487"></svg:path><svg:path stroke-linejoin="round" d="M 240.00422,-48.000717 A 31.999937,31.999937 0 0 1 208.00429,-16.00078" transform="scale(1 -1)"></svg:path><svg:path stroke-linejoin="round" d="M -16.004652,-48.000717 A 31.999937,31.999937 0 0 1 -48.004588,-16.00078" transform="scale(-1)"></svg:path><svg:path stroke-linejoin="round" d="m -16.004652,160.0005 a 31.999937,31.999937 0 0 1 -31.999936,31.99994" transform="scale(-1 1)"></svg:path><svg:path stroke-linejoin="round" d="m 240.00422,160.0005 a 31.999937,31.999937 0 0 1 -31.99993,31.99994"></svg:path><svg:path stroke-linejoin="round" d="M 16.004649,48.00072 V 160.00051"></svg:path><svg:path stroke-linejoin="round" d="M 240.00422,48.00072 V 160.00051"></svg:path><svg:path stroke-linejoin="round" d="m 48.004588,192.00044 h 31.999937 l 47.999905,47.99991 47.99991,-47.99991 h 31.99994"></svg:path></svg:g>`,
})
export class GalaChatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
