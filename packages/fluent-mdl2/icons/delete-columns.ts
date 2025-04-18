import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeleteColumnsIcon],svg[fluent-mdl2-delete-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 0h640v1092l-320 319l-320-320zm1280 0v1024h-512V896h384V0zM128 896h384v128H0V0h128zm1149 606l-226 226l226 227l-90 90l-227-226l-227 227l-90-91l227-227l-227-227l90-90l227 227l227-227z"></svg:path>`,
})
export class FluentMdl2DeleteColumnsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
