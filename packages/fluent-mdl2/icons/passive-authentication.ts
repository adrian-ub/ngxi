import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PassiveAuthenticationIcon],svg[fluent-mdl2-passive-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1344 1510l339-339l90 90l-429 429l-237-237l90-90zm704-742v1280H768v-781q-61 13-128 13q-133 0-249-50t-204-137T50 890T0 640q0-133 50-249t137-204T390 50T640 0q133 0 249 50t204 137t137 203t50 250q0 67-13 128zM128 640q0 106 40 199t110 162t163 110t199 41t199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199m1792 256h-693q-51 113-134 196t-197 135v693h1024zm-915-403L576 922L339 685l90-90l147 147l339-339z"></svg:path>`,
})
export class FluentMdl2PassiveAuthenticationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
