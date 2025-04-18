import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiamondSolidIcon],svg[fluent-mdl2-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m625 768l267-640h264l267 640zm971 0l-267-640h123l542 640zm-174 128l-398 946l-398-946zm575 0l-847 1058l446-1058zm-1545 0l446 1058L51 896zm0-128H54l540-640h125z"></svg:path>`,
})
export class FluentMdl2DiamondSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
