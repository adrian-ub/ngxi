import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeaker20FilledIcon],svg[fluent-beaker-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3.5A.5.5 0 0 1 6 3h8a.5.5 0 0 1 0 1h-.996v4.684c0 .58.144 1.15.42 1.66L14.315 12h-8.63l.89-1.653a3.5 3.5 0 0 0 .42-1.66V4H6a.5.5 0 0 1-.5-.5M5.146 13l-.964 1.79a1.5 1.5 0 0 0 1.32 2.212h8.997a1.5 1.5 0 0 0 1.32-2.212L14.854 13z"></svg:path>`,
})
export class FluentBeaker20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
