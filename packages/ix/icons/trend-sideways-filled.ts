import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysFilledIcon],svg[ix-trend-sideways-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.82 0 213.333 95.513 213.333 213.333c0 117.821-95.512 213.334-213.333 213.334c-110.62 0-201.576-84.196-212.28-192l281.436-.001L256 346.51l30.17 30.17l105.594-105.595L406.85 256L286.17 135.32L256 165.49l69.18 69.177H43.72c10.704-107.804 101.66-192 212.28-192"></svg:path>`,
})
export class IxTrendSidewaysFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
