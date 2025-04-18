import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontColorAIcon],svg[fluent-mdl2-font-color-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1582 1664h-135l-170-512H643l-170 512H338L893 0h134zm-348-640L960 203l-274 821z"></svg:path>`,
})
export class FluentMdl2FontColorAIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
