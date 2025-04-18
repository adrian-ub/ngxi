import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BuildQueueIcon],svg[fluent-mdl2-build-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1024h-512v512h-512v512H0V1024h512V512h512V0h1024zM896 1152H128v768h768zm512-512H640v384h384v384h384zm512-512h-768v384h384v384h384z"></svg:path>`,
})
export class FluentMdl2BuildQueueIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
