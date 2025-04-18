import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TaskboardIcon],svg[fluent-mdl2-taskboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H0V128zm-128 128h-768v1024h768zm-1664 0v384h768V256zm0 1536h768V768H128zm1664 0v-384h-768v384z"></svg:path>`,
})
export class FluentMdl2TaskboardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
