import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TransitionPushIcon],svg[fluent-mdl2-transition-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h2048v1152H0zm128 1024h1792V512H128zM2048 128v128H0V128zM0 1664h2048v128H0zm1371-768h421v128h-421l162 163l-90 90l-317-317l317-317l90 90zM605 643l317 317l-317 317l-90-90l162-163H256V896h421L515 733z"></svg:path>`,
})
export class FluentMdl2TransitionPushIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
