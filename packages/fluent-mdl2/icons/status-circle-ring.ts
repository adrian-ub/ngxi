import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StatusCircleRingIcon],svg[fluent-mdl2-status-circle-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256q115 0 221 29t199 84t168 130t130 168t84 199t30 222q0 115-29 221t-84 199t-130 168t-168 130t-199 84t-222 30q-115 0-221-29t-199-84t-168-130t-130-168t-84-199t-30-222q0-115 29-221t84-199t130-168t168-130t199-84t222-30m0 1536q97 0 187-25t168-71t142-110t111-143t71-168t25-187q0-97-25-187t-71-168t-110-142t-143-111t-168-71t-187-25q-97 0-187 25t-168 71t-142 110t-111 143t-71 168t-25 187q0 97 25 187t71 168t110 142t143 111t168 71t187 25"></svg:path>`,
})
export class FluentMdl2StatusCircleRingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
