import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOof24RegularIcon],svg[fluent-presence-oof-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.562 9.057a1.5 1.5 0 0 0-2.121-2.122L6.437 10.94a1.5 1.5 0 0 0 0 2.12l4.004 4.005a1.5 1.5 0 0 0 2.121-2.121L11.12 13.5h5.38a1.5 1.5 0 1 0 0-3h-5.38zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0"></svg:path>`,
})
export class FluentPresenceOof24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
