import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGravetwoIcon],svg[whh-gravetwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-60 90-108.5T325 845l109-378l-274 109q-13 0-22.5-9.5T128 544V224q0-13 9.5-22.5T160 192l267 107L320 32q0-13 9.5-22.5T352 0h320q13 0 22.5 9.5T704 32L597 299l267-107q13 0 22.5 9.5T896 224v320q0 13-9.5 22.5T864 576L590 467l109 378q145 22 235 70.5t90 108.5"></svg:path>`,
})
export class WhhGravetwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
