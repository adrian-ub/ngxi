import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FlashlightIcon],svg[fluent-mdl2-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v1152h-475l-256-256H0V640h1317l256-256zM128 1152h1152V768H128zm1499 256h37V512h-37l-219 219v458zm293-896h-128v896h128zm-832 384q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19"></svg:path>`,
})
export class FluentMdl2FlashlightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
