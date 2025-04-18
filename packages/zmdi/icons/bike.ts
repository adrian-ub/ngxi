import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBikeIcon],svg[zmdi-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330.5 85q-17.5 0-30-12.5t-12.5-30t12.5-30t30-12.5t30 12.5t12.5 30t-12.5 30t-30 12.5m-224 139q44.5 0 75.5 31t31 75.5t-31 75.5t-75.5 31T31 406T0 330.5T31 255t75.5-31m0 181q30.5 0 52.5-22t22-52.5t-22-52.5t-52.5-22T54 278t-22 52.5T54 383t52.5 22M230 192l47 49v132h-42V267l-69-60q-12-10-12-30q0-17 12-30l60-60q10-12 30-12q18 0 34 12l41 41q32 32 76 32v43q-64 0-108-45l-17-17zm175.5 32q44.5 0 75.5 31t31 75.5t-31 75.5t-75.5 31t-75.5-31t-31-75.5t31-75.5t75.5-31m0 181q30.5 0 52.5-22t22-52.5t-22-52.5t-52.5-22t-52.5 22t-22 52.5t22 52.5t52.5 22"></svg:path>`,
})
export class ZmdiBikeIcon {
  readonly viewBox = input("0 0 512 440")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
