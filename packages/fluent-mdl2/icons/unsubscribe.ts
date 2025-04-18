import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UnsubscribeIcon],svg[fluent-mdl2-unsubscribe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1276q1 2 1 28t1 69t0 97t0 112t-1 114t0 102t-1 79t0 43H0v-644L373 158l102 99l-341 1023h418l128 256h560l128-256h418L1445 256l101-103zm-128 132h-344l-128 256H600l-128-256H128v384h1664zM531 787l338-339l-338-339l90-90l339 339l339-339l90 90l-339 339l339 339l-90 90l-339-339l-339 339z"></svg:path>`,
})
export class FluentMdl2UnsubscribeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
