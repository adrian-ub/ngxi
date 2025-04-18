import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionShintoReligionGateCultureShintoJapanJapaneseShrineIcon],svg[streamline-religion-shinto-religion-gate-culture-shinto-japan-japanese-shrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4a.5.5 0 0 1-.5.5H1A.5.5 0 0 1 .5 4V.5a11.55 11.55 0 0 0 13 0ZM3 4.5v9m8-9v9M.5 8h13M7 4.5V8"></svg:path>`,
})
export class StreamlineReligionShintoReligionGateCultureShintoJapanJapaneseShrineIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
