import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ViewAllIcon],svg[fluent-mdl2-view-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1664v1664H128zm1536 768V256h-640v640zM896 256H256v640h640zm-640 768v640h640v-640zm768 640h640v-640h-640z"></svg:path>`,
})
export class FluentMdl2ViewAllIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
