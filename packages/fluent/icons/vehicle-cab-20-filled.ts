import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVehicleCab20FilledIcon],svg[fluent-vehicle-cab-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 1a.75.75 0 0 0-.75.75V3h-.86a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v4A1.5 1.5 0 0 0 3.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.079-1.44l-.112-.56h.441l.102-.007A.75.75 0 0 0 18 6.75l-.007-.102A.75.75 0 0 0 17.25 6h-.741l-.197-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75zM6.14 4h7.72a1.5 1.5 0 0 1 1.471 1.206L15.891 8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4M5 11.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m8 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0M6 17v-1H4v1a1 1 0 1 0 2 0m10-1v1a1 1 0 1 1-2 0v-1z"></svg:path>`,
})
export class FluentVehicleCab20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
