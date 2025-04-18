import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextUnderline20FilledIcon],svg[fluent-text-underline-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3.75a.75.75 0 0 0-1.5 0V9c0 1.367.339 2.736 1.16 3.78c.843 1.07 2.132 1.72 3.84 1.72s2.997-.65 3.84-1.72C14.66 11.736 15 10.367 15 9V3.75a.75.75 0 0 0-1.5 0V9c0 1.143-.286 2.15-.84 2.853C12.129 12.529 11.293 13 10 13s-2.128-.47-2.66-1.147C6.785 11.15 6.5 10.143 6.5 9zM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextUnderline20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
