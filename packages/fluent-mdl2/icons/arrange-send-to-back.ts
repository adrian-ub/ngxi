import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrangeSendToBackIcon],svg[fluent-mdl2-arrange-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1536h512v128H384v-640h128zM1536 512h-512V384h640v640h-128zM896 896H0V0h896zM768 128H128v640h640zm1280 1024v896h-896v-896zm-128 128h-640v640h640z"></svg:path>`,
})
export class FluentMdl2ArrangeSendToBackIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
