import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTiltIcon],svg[material-icon-theme-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4caf50" d="M14 5v22a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V13a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1M4.47 7.706l5.694-3.559A1.2 1.2 0 0 1 12 5.165V11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.554a1 1 0 0 1 .47-.848"></svg:path>`,
})
export class MaterialIconThemeTiltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
