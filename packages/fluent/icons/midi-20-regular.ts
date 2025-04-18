import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMidi20RegularIcon],svg[fluent-midi-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM5.75 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9 6.751a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zM3 5v4h14V5zm5 5H6v3.5a.5.5 0 0 1-1 0V10H3v5h14v-5h-2v3.5a.5.5 0 0 1-1 0V10h-2v3.5a.5.5 0 0 1-1 0V10H9v3.5a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentMidi20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
