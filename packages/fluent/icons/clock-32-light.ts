import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock32LightIcon],svg[fluent-clock-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8.5a.5.5 0 0 0-1 0v8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H16zM30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-1 0c0-7.18-5.82-13-13-13S3 8.82 3 16s5.82 13 13 13s13-5.82 13-13"></svg:path>`,
})
export class FluentClock32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
