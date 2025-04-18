import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToolbox20RegularIcon],svg[fluent-toolbox-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5V6H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12.003a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H14V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5M7.5 4h5a.5.5 0 0 1 .5.5V6H7V4.5a.5.5 0 0 1 .5-.5M4 7h12.003a1 1 0 0 1 1 1v2H14v-.5a.5.5 0 0 0-1 0v.5H7v-.5a.5.5 0 0 0-1 0v.5H3V8a1 1 0 0 1 1-1m9 4v.5a.5.5 0 0 0 1 0V11h3.003v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4h3v.5a.5.5 0 0 0 1 0V11z"></svg:path>`,
})
export class FluentToolbox20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
