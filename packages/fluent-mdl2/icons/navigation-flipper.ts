import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NavigationFlipperIcon],svg[fluent-mdl2-navigation-flipper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m771 1315l290-291l-290-291l90-90l382 381l-382 381zM1664 0v2048H256V0zm-128 128H384v1792h1152z"></svg:path>`,
})
export class FluentMdl2NavigationFlipperIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
