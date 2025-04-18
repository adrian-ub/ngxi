import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontIncreaseIcon],svg[fluent-mdl2-font-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1027 128l555 1664h-135l-170-512H643l-170 512H338L893 128zm207 1024L960 330l-274 822zm814-768h-640l320-320z"></svg:path>`,
})
export class FluentMdl2FontIncreaseIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
