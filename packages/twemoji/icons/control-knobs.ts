import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiControlKnobsIcon],svg[twemoji-control-knobs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:circle cx="27" cy="20.6" r=".686" fill="#67757F"></svg:circle><svg:circle cx="30.2" cy="21.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="23.8" cy="21.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="21.514" cy="23.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="20.6" cy="27" r=".686" fill="#67757F"></svg:circle><svg:circle cx="32.486" cy="23.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="33.401" cy="27" r=".686" fill="#DA2F47"></svg:circle><svg:circle cx="27" cy="27" r="4.881"></svg:circle><svg:circle cx="27" cy="27" r="3.994" fill="#292F33"></svg:circle><svg:path fill="#E1E8ED" d="m28.182 24.118l-1.697 2.824a.47.47 0 1 0 .807.485l1.697-2.824a.47.47 0 1 0-.807-.485"></svg:path><svg:circle cx="9" cy="20.6" r=".686" fill="#67757F"></svg:circle><svg:circle cx="12.2" cy="21.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="5.8" cy="21.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="3.514" cy="23.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="2.6" cy="27" r=".686" fill="#67757F"></svg:circle><svg:circle cx="14.486" cy="23.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="15.401" cy="27" r=".686" fill="#DA2F47"></svg:circle><svg:circle cx="9" cy="27" r="4.881"></svg:circle><svg:circle cx="9.001" cy="26.999" r="3.994" fill="#292F33"></svg:circle><svg:path fill="#E1E8ED" d="m6.099 25.868l2.853 1.647a.47.47 0 0 0 .471-.815L6.57 25.053a.47.47 0 1 0-.471.815"></svg:path><svg:circle cx="27" cy="3.6" r=".686" fill="#67757F"></svg:circle><svg:circle cx="30.2" cy="4.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="23.8" cy="4.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="21.514" cy="6.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="20.6" cy="10" r=".686" fill="#67757F"></svg:circle><svg:circle cx="32.486" cy="6.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="33.401" cy="10" r=".686" fill="#DA2F47"></svg:circle><svg:circle cx="27" cy="10" r="4.881"></svg:circle><svg:circle cx="27.001" cy="10" r="3.994" fill="#292F33"></svg:circle><svg:path fill="#E1E8ED" d="m25.011 7.603l1.697 2.824a.47.47 0 1 0 .807-.485l-1.696-2.824a.47.47 0 0 0-.808.485"></svg:path><svg:circle cx="9" cy="3.6" r=".686" fill="#67757F"></svg:circle><svg:circle cx="12.2" cy="4.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="5.8" cy="4.515" r=".686" fill="#67757F"></svg:circle><svg:circle cx="3.514" cy="6.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="2.6" cy="10" r=".686" fill="#67757F"></svg:circle><svg:circle cx="14.486" cy="6.8" r=".686" fill="#67757F"></svg:circle><svg:circle cx="15.401" cy="10" r=".686" fill="#DA2F47"></svg:circle><svg:circle cx="9" cy="9.999" r="4.881"></svg:circle><svg:circle cx="8.999" cy="10" r="3.994" fill="#292F33"></svg:circle><svg:path fill="#E1E8ED" d="M11.431 8.053L8.578 9.7a.47.47 0 0 0 .471.815l2.853-1.647a.47.47 0 0 0-.471-.815"></svg:path>`,
})
export class TwemojiControlKnobsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
