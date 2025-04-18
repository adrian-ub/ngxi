import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusInfiniteIcon],svg[nimbus-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.07 4.25c-1.62 0-3 .94-4.07 2.79c-1.08-1.85-2.45-2.79-4.07-2.79A3.84 3.84 0 0 0 0 8a3.84 3.84 0 0 0 3.93 3.75c1.62 0 3-.94 4.07-2.79c1.08 1.85 2.45 2.79 4.07 2.79A3.84 3.84 0 0 0 16 8a3.84 3.84 0 0 0-3.93-3.75M3.93 10.5A2.6 2.6 0 0 1 1.25 8a2.6 2.6 0 0 1 2.68-2.5c1.25 0 2.29.82 3.18 2.5c-.89 1.68-1.93 2.5-3.18 2.5m8.14 0c-1.25 0-2.29-.82-3.18-2.5c.89-1.68 1.93-2.5 3.18-2.5A2.6 2.6 0 0 1 14.75 8a2.6 2.6 0 0 1-2.68 2.5"></svg:path>`,
})
export class NimbusInfiniteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
