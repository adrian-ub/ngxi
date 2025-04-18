import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRead20FilledIcon],svg[fluent-mail-read-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.257 1.071a.5.5 0 0 0-.514 0L2.97 5.134q-.226.136-.405.32L10 9.918l7.435-4.461a2 2 0 0 0-.406-.322zm7.673 5.254l-7.673 4.604a.5.5 0 0 1-.514 0L2.07 6.323Q2 6.58 2 6.85v6.65A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5V6.85q0-.27-.07-.525"></svg:path>`,
})
export class FluentMailRead20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
