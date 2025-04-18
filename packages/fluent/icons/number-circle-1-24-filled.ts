import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle124FilledIcon],svg[fluent-number-circle-1-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-14.75v9a.75.75 0 0 1-1.5 0V10.1c-.548.588-1.235 1.102-2.013 1.361a.75.75 0 0 1-.474-1.422c.572-.191 1.149-.644 1.623-1.23c.475-.586.783-1.228.879-1.706a.75.75 0 0 1 1.485.147"></svg:path>`,
})
export class FluentNumberCircle124FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
