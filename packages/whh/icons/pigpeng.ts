import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpengIcon],svg[whh-pigpeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68V192h-736q-40 0-68-28t-28-68t28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpengIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
