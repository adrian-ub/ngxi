import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EditMirroredIcon],svg[fluent-mdl2-edit-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 335q0 66 25 128t73 110l1317 1317l633 158l-158-633L573 98q-48-48-110-73T335 0q-69 0-130 26T99 98T27 205T0 335m1722 1093q-106 35-182 111t-112 183L347 640l293-293zm150 444l-329-82q10-46 32-87t55-73t73-54t87-33zM256 549q-25-25-48-47t-41-46t-28-53t-11-67q0-43 16-80t45-66t66-45t81-17q38 0 66 10t53 29t47 41t47 48z"></svg:path>`,
})
export class FluentMdl2EditMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
