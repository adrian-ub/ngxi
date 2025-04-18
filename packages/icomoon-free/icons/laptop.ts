import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeLaptopIcon],svg[icomoon-free-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v8H0v3h16v-3zm-4 2H6v-1h4zm3-2H3V3.002L3.002 3h9.996l.002.002z"></svg:path>`,
})
export class IcomoonFreeLaptopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
