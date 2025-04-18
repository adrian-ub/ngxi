import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MoveIcon],svg[fluent-mdl2-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245 1024l206 205l-91 91L0 960l360-360l91 91l-206 205h395v128zm1675-64l-356 355l-90-90l201-201h-395V896h395l-206-205l91-91zM695 446l-90-90L960 0l360 360l-91 91l-205-206v395H896V245zm534 1023l91 91l-360 360l-360-360l91-91l205 206v-395h128v395z"></svg:path>`,
})
export class FluentMdl2MoveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
