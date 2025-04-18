import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineDownLeft16RegularIcon],svg[fluent-arrow-outline-down-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.03 1.44a1.5 1.5 0 0 1 2.121 0l3.41 3.409a1.5 1.5 0 0 1 0 2.121l-4.027 4.026l1.098 1.099c.75.749.285 2.032-.77 2.128l-8.499.773a1.25 1.25 0 0 1-1.358-1.358l.773-8.5c.096-1.055 1.38-1.52 2.129-.77l1.097 1.097zm1.414.706a.5.5 0 0 0-.707 0l-4.38 4.38a.5.5 0 0 1-.707 0L3.2 5.076a.25.25 0 0 0-.426.153L2 13.73a.25.25 0 0 0 .272.271l8.498-.773a.25.25 0 0 0 .154-.425l-1.45-1.453a.5.5 0 0 1 0-.707l4.38-4.38a.5.5 0 0 0 0-.707z"></svg:path>`,
})
export class FluentArrowOutlineDownLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
