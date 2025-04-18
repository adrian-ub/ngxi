import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyCloseIcon],svg[mdi-magnify-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.5-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A7.07 7.07 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7m2.12 3.46L9 7.59L6.88 5.46L5.46 6.88L7.59 9l-2.13 2.12l1.42 1.42L9 10.41l2.12 2.13l1.42-1.42L10.41 9l2.13-2.12z"></svg:path>`,
})
export class MdiMagnifyCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
