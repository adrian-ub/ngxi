import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SubscribeIcon],svg[fluent-mdl2-subscribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1276q1 2 1 29t1 69t0 97t0 111t-1 114t0 102t-1 79t0 43H0v-121q0-47-1-103t0-113t-1-112t0-96t0-70t2-29L383 128h385v128H475L134 1280h418l128 256h560l128-256h418L1445 256h-293V128h385zm-128 132h-344l-128 256H600l-128-256H128v384h1664zM896 933V0h128v933l294-293l90 90l-448 448l-448-448l90-90z"></svg:path>`,
})
export class FluentMdl2SubscribeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
