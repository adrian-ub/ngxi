import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLuggage16FilledIcon],svg[fluent-luggage-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.834 1a.5.5 0 0 0 0 1H6v1H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2v.5a.5.5 0 0 0 1 0V14h4v.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V2h.167a.5.5 0 0 0 0-1zM7 3V2h2v1zM5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentLuggage16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
