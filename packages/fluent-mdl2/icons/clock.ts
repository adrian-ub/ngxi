import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClockIcon],svg[fluent-mdl2-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 2048q-124 0-238-32t-214-90t-181-140t-140-181t-91-214t-32-239t32-238t90-214t140-181t181-140t214-91t239-32t238 32t214 90t181 140t140 181t91 214t32 239t-32 238t-90 214t-140 181t-181 140t-214 91t-239 32m0-1664q-159 0-298 60T482 609T317 853t-61 299q0 159 60 298t165 244t244 165t299 61q159 0 298-60t244-165t165-244t61-299q0-159-60-298t-165-244t-244-165t-299-61m0 768V640H896v640h512v-128z"></svg:path>`,
})
export class FluentMdl2ClockIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
