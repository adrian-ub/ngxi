import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PhotoIcon],svg[fluent-mdl2-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v1536H0zm1920 1408V384H128v1280zM1792 512v1024H256V512zm-128 896V640H384v768z"></svg:path>`,
})
export class FluentMdl2PhotoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
