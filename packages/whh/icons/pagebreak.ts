import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPagebreakIcon],svg[whh-pagebreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m816.417 400l-112 112h-32l-112-112l-112 112h-32l-112-112l-112 112h-32l-112-112l-48 48V64q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v416zm-784 112h32l112 112l112-112h32l112 112l112-112h32l112 112l112-112h32l64 64v384q0 26-18.5 45t-45.5 19h-768q-26 0-45-19t-19-45V544z"></svg:path>`,
})
export class WhhPagebreakIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
