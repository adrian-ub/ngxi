import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackIndicatorIcon],svg[fluent-mdl2-stack-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1707 853h341v1024H683v-341H341v-341H0V171h1365v341h342zM171 341v683h1024V341zm341 854v170h1024V683h-171v512zm1365 512v-683h-170v512H853v171z"></svg:path>`,
})
export class FluentMdl2StackIndicatorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
