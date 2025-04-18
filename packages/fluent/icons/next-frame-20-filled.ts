import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNextFrame20FilledIcon],svg[fluent-next-frame-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5m5.447.214A1.25 1.25 0 0 0 8 4.252v11.5a1.25 1.25 0 0 0 1.954 1.033l8.5-5.793a1.25 1.25 0 0 0-.008-2.07z"></svg:path>`,
})
export class FluentNextFrame20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
