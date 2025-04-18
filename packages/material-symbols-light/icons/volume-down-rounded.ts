import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolumeDownRoundedIcon],svg[material-symbols-light-volume-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.423 14H6.808q-.348 0-.578-.23T6 13.192v-2.384q0-.348.23-.578t.578-.23h2.615l2.685-2.685q.244-.244.568-.116t.324.476v8.65q0 .348-.324.476t-.568-.116zm8.077-2q0 .82-.302 1.555q-.302.736-.846 1.278q-.173.13-.378.041t-.205-.312V9.389q0-.223.205-.313t.378.041q.544.548.846 1.306T17.5 12"></svg:path>`,
})
export class MaterialSymbolsLightVolumeDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
