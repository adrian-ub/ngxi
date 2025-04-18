import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSubscript2Icon],svg[ri-subscript-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v13H9V6H3V4h14v2zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 16c0 .573-.24 1.09-.626 1.454L18.744 19H21v1h-4v-1z"></svg:path>`,
})
export class RiSubscript2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
