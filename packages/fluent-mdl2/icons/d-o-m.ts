import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DOMIcon],svg[fluent-mdl2-d-o-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 1280h-512v-256H640v512h384v-128h512v512h-512v-256H512V512H384V0h512v512H640v384h384V768h512zm-398-398v284h284V882zM498 398h284V114H498zm640 1124v284h284v-284z"></svg:path>`,
})
export class FluentMdl2DOMIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
