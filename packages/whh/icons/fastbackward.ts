import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFastbackwardIcon],svg[whh-fastbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m962.488 1013l-386-443v430q-38 40-62 13l-386-442v389q0 26-19 45t-45.5 19t-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v390l386-443q25-27 62 13v431l386-444q25-27 62 13v976q-37 40-62 13"></svg:path>`,
})
export class WhhFastbackwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
