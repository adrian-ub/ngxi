import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCode16Icon],svg[fluent-color-code-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCode160)" d="M9.905 2.815a.75.75 0 0 1 .38.99l-4 9a.75.75 0 1 1-1.37-.61l4-9a.75.75 0 0 1 .99-.38M4.498 5.189a.75.75 0 0 1 .063 1.06l-1.558 1.75l1.558 1.753a.75.75 0 1 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063m7.004 0a.75.75 0 0 1 1.059.063l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.122-.996L12.996 8L11.44 6.248a.75.75 0 0 1 .063-1.059"></svg:path><svg:defs><svg:lineargradient id="fluentColorCode160" x1="1.647" x2="13.497" y1="2.05" y2="15.098" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C76EFB"></svg:stop><svg:stop offset="1" stop-color="#8B52F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCode16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
