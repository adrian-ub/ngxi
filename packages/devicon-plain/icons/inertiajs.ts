import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainInertiajsIcon],svg[devicon-plain-inertiajs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.433 28.433H55.625L91.192 64L55.625 99.567h36.808L128 64zm-55.625 0H0L35.567 64L0 99.567h36.808L72.375 64z"></svg:path>`,
})
export class DeviconPlainInertiajsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
