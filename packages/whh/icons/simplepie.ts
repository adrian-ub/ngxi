import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSimplepieIcon],svg[whh-simplepie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608.687 6q84 0 159.5 24t132.5 68t90.5 111t33.5 149q0 60-16 111.5t-54 96.5t-95.5 76.5t-146 49.5t-200.5 18q-93 0-175.5-28.5t-143-78t-105-114.5t-66.5-139.5t-22-151.5V6q0-13 13 4q41 52 54 65q60 59 125 59q42 0 96.5-20t99.5-44t105.5-44t114.5-20"></svg:path>`,
})
export class WhhSimplepieIcon {
  readonly viewBox = input("0 0 1025 710")
  readonly width = input("1.45em")
  readonly height = input("1em")
}
