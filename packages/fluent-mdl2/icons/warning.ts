import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WarningIcon],svg[fluent-mdl2-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1920H0L960 0zM207 1792h1506L960 286zm817-1024v640H896V768zm-128 768h128v128H896z"></svg:path>`,
})
export class FluentMdl2WarningIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
