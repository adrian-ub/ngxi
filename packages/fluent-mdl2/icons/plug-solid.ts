import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PlugSolidIcon],svg[fluent-mdl2-plug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 384v448q0 84-29 159t-80 134t-122 98t-153 52v773H896v-773q-83-12-153-51t-121-99t-81-134t-29-159V384h128V0h128v384h384V0h128v384z"></svg:path>`,
})
export class FluentMdl2PlugSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
