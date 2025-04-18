import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNomadIconIcon],svg[logos-nomad-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00CA8E" d="M128.044 0L0 73.865v147.773l127.956 73.865L256 221.638V73.865zm57.123 162.582l-34.098 19.685l-41.217-22.542v47.105L71.14 231.393v-98.428l30.76-18.806l42.622 22.453V88.541l40.645-24.431z"></svg:path>`,
})
export class LogosNomadIconIcon {
  readonly viewBox = input("0 0 256 296")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
