import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle432FilledIcon],svg[fluent-number-circle-4-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16m16.998-6.179c0-1.385-1.797-1.929-2.565-.776l-5.954 8.934A1.3 1.3 0 0 0 11.56 20h5.437v2a1 1 0 1 0 2 0v-2h1a1 1 0 1 0 0-2h-1zm-2 1.983V18h-4.13z"></svg:path>`,
})
export class FluentNumberCircle432FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
