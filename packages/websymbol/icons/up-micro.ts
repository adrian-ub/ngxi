import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolUpMicroIcon],svg[websymbol-up-micro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471 619H0l235-236z"></svg:path>`,
})
export class WebsymbolUpMicroIcon {
  readonly viewBox = input("0 0 471 1000")
  readonly width = input("0.48em")
  readonly height = input("1em")
}
