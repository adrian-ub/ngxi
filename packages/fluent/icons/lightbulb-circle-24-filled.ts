import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLightbulbCircle24FilledIcon],svg[fluent-lightbulb-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.481 15H9.519l.103.454l.043.152l.057.143c.288.646.902 1.05 1.587 1.05h1.382l.156-.009l.15-.023l.147-.035a1.73 1.73 0 0 0 1.233-1.276zM12 5.202a5 5 0 0 0-5 5l.008.271l.02.256l.034.252a5 5 0 0 0 1.64 2.978l.154.129l.321 1.412h5.644l.32-1.41l.163-.136a5 5 0 0 0 1.69-3.497l.006-.255a5 5 0 0 0-5-5"></svg:path>`,
})
export class FluentLightbulbCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
