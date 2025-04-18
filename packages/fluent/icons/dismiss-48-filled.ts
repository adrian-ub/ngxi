import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss48FilledIcon],svg[fluent-dismiss-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.56 6.44a1.5 1.5 0 1 0-2.12 2.12L21.878 24L6.439 39.44a1.5 1.5 0 1 0 2.122 2.12L24 26.121L39.439 41.56a1.5 1.5 0 1 0 2.12-2.121L26.122 24l15.44-15.439A1.5 1.5 0 1 0 39.44 6.44L24 21.879z"></svg:path>`,
})
export class FluentDismiss48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
