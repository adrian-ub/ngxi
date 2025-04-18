import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLuggage16RegularIcon],svg[fluent-luggage-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.334 1.5a.5.5 0 0 1 .5-.5h4.333a.5.5 0 0 1 0 1H10v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v.5a.5.5 0 0 1-1 0V14H6v.5a.5.5 0 0 1-1 0V14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V2h-.166a.5.5 0 0 1-.5-.5M7 2v1h2V2zM5 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentLuggage16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
