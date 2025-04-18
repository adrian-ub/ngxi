import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontDecreaseIcon],svg[fluent-mdl2-font-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1027 768l342 1024h-135l-85-256H771l-85 256H551L893 768zm79 640L960 971l-146 437zM2048 0l-320 320L1408 0z"></svg:path>`,
})
export class FluentMdl2FontDecreaseIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
