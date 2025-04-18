import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeakerDismiss20FilledIcon],svg[fluent-beaker-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3.5A.5.5 0 0 1 6 3h8a.5.5 0 0 1 0 1h-.996v4.684q0 .258.038.511A5.5 5.5 0 0 0 9.6 12H5.685l.89-1.653a3.5 3.5 0 0 0 .42-1.66V4H6a.5.5 0 0 1-.5-.5m3.5 11a5.5 5.5 0 0 1 .207-1.5h-4.06l-.965 1.79a1.5 1.5 0 0 0 1.32 2.212H9.6A5.5 5.5 0 0 1 9 14.5m10 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708z"></svg:path>`,
})
export class FluentBeakerDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
