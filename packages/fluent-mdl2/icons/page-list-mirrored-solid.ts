import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageListMirroredSolidIcon],svg[fluent-mdl2-page-list-mirrored-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0v1792h1536V0zm1152 1152h128v128h-128zm0-384h128v128h-128zm0-384h128v128h-128zm-896 768h768v128H512zm0-384h768v128H512zm0-384h768v128H512z"></svg:path>`,
})
export class FluentMdl2PageListMirroredSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
