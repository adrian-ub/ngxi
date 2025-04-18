import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AttachIcon],svg[fluent-mdl2-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 384v1216q0 93-35 174t-96 142t-142 96t-175 36q-93 0-174-35t-142-96t-96-142t-36-175V320q0-66 25-124t69-101t102-69T960 0t124 25t101 69t69 102t26 124v1280q0 40-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75V512h128v1088q0 26 19 45t45 19t45-19t19-45V320q0-40-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75v1280q0 66 25 124t69 101t102 69t124 26t124-25t101-69t69-102t26-124V384z"></svg:path>`,
})
export class FluentMdl2AttachIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
