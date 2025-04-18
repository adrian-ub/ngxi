import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlur16FilledIcon],svg[fluent-blur-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 0 4.472 10H8v-1h5.197q.275-.475.462-1H8V9h5.917Q14 8.511 14 8H8V7h5.917a6 6 0 0 0-.258-1H8V5h5.197a6 6 0 0 0-.725-1H8V3h3.318A5.97 5.97 0 0 0 8 2"></svg:path>`,
})
export class FluentBlur16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
