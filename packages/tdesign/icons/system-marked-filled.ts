import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemMarkedFilledIcon],svg[tdesign-system-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h11.5v-4.002H3v-10h18V11h2zM3 20h9.5v2H3z"></svg:path><svg:path fill="currentColor" d="M23 12.996h-8.5V23.29l4.253-2.615L23 23.291z"></svg:path>`,
})
export class TdesignSystemMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
