import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TransitionEffectIcon],svg[fluent-mdl2-transition-effect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 0v896H0V0h128v768h768V347L733 509l-90-90l317-317l317 317l-90 90l-163-162v421h768V0zM0 1024h1920v896h-128v-768h-768v421l163-162l90 90l-317 317l-317-317l90-90l163 162v-421H128v768H0z"></svg:path>`,
})
export class FluentMdl2TransitionEffectIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
