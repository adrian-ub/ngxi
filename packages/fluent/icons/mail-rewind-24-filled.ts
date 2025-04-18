import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRewind24FilledIcon],svg[fluent-mail-rewind-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 8.997V6.83l3.342 2.92c.647.566 1.658.106 1.658-.753V2.002c0-.859-1.011-1.318-1.658-.753l-3.342 2.92V2.003c0-.859-1.011-1.318-1.658-.753l-4.002 3.498a1 1 0 0 0 0 1.506l4.002 3.497c.647.566 1.658.106 1.658-.753m-6.318-1.99A2 2 0 0 1 12.679 4H5.25l-.186.005a3.25 3.25 0 0 0-3.048 2.919L12 12.154L16.109 10zm9.002 3.498l-1.24-1.083l-.575.301c-.356.935-1.385 1.457-2.34 1.226l-5.183 2.715a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-6.017a2 2 0 0 1-.314-.228"></svg:path>`,
})
export class FluentMailRewind24FilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
