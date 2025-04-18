import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FontSizeIcon],svg[fluent-mdl2-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1966 1792h-135l-170-512h-634l-170 512H722l-85-256H259l-85 256H39L381 768h134l274 821l488-1461h134zM594 1408L448 971l-146 437zm1024-256l-274-821l-274 821z"></svg:path>`,
})
export class FluentMdl2FontSizeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
