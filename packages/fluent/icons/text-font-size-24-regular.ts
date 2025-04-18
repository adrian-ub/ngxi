import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontSize24RegularIcon],svg[fluent-text-font-size-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.212 17.11L15.043 3.5c.223-.627 1.07-.664 1.365-.111l.049.11l5.5 15.5a.75.75 0 0 1-1.373.596l-.04-.094L18.945 15h-6.394l-1.58 4.452a.75.75 0 0 1-.354.452l-.093.044a.75.75 0 0 1-.929-.33l-.044-.092L8.556 17H4.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876l.03-.098l3.754-9.495a.75.75 0 0 1 1.345-.104l.05.105zL15.043 3.5zm-3.71-5.318L5.037 15.5h2.928zm9.248-5.8L13.084 13.5h5.33z"></svg:path>`,
})
export class FluentTextFontSize24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
