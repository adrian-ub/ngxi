import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHistoricIcon],svg[maki-historic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1c-1 0-1 1-2 1H2c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1h5v2.5s0 .5.5.5s.5-.5.5-.5V11h5c.545 0 1-.455 1-1V3c0-.545-.455-1-1-1H9.5c-1 0-1-1-2-1M3 5V4h9v1zm0 1h4v1H3zm0 2h7v1H3z"></svg:path>`,
})
export class MakiHistoricIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
