import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlur20RegularIcon],svg[fluent-blur-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 0 5.292 14H10v1a7 7 0 1 1 0-14h3.876A7.96 7.96 0 0 0 10 2m0 2h5.292q.52.459.953 1H10zm6.93 2H10v1h7.419a8 8 0 0 0-.49-1M10 8h7.748q.127.49.19 1H10zm8 2h-8v1h7.938q.062-.492.062-1m-8 2h7.748a8 8 0 0 1-.33 1H10zm6.93 2H10v1h6.245q.38-.473.685-1"></svg:path>`,
})
export class FluentBlur20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
