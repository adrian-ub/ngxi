import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTraqIcon],svg[whh-traq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384q-31 0-67 30.5t-62.5 70t-44.5 75t-18 48.5v352q0 26-19 45t-45.5 19t-45-19t-18.5-45V320q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v53q92-117 192-117q26 0 45 18.5t19 45t-19 45.5t-45 19m-512 0h-64v576q0 27-19 45.5t-45.5 18.5t-45-18.5T128 960V384H64q-27 0-45.5-19T0 319.5t18.5-45T64 256h64V64q0-27 18.5-45.5t45-18.5T237 18.5T256 64v192h64q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhTraqIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
