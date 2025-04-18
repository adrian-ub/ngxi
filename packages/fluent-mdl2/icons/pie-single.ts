import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PieSingleIcon],svg[fluent-mdl2-pie-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 0q124 0 238 32t214 90t181 140t140 181t91 214t32 239h-896zm128 768h630q-21-121-76-226t-139-189t-188-138t-227-77zm-256 256h896q0 59-3 114t-11 109t-23 107t-38 108q-57 134-148 242t-206 184t-251 118t-280 42q-133 0-255-34t-230-96t-194-150t-150-195t-97-229t-34-256q0-133 34-255t96-230t150-194t195-150t229-97t256-34h64zm-128 128V258q-108 8-207 42t-184 91t-155 131t-119 165t-76 191t-27 210q0 115 30 221t84 198t130 169t168 130t199 84t221 30q108 0 209-27t191-76t165-119t132-155t90-184t43-207z"></svg:path>`,
})
export class FluentMdl2PieSingleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
