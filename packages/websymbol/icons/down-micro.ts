import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolDownMicroIcon],svg[websymbol-down-micro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 619L0 383h471z"></svg:path>`,
})
export class WebsymbolDownMicroIcon {
  readonly viewBox = input("0 0 471 1000")
  readonly width = input("0.48em")
  readonly height = input("1em")
}
