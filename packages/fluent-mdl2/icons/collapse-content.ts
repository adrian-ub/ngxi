import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CollapseContentIcon],svg[fluent-mdl2-collapse-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v1792h-128V128H256V0zM128 256h1664v1664H128zm128 1536h1408V384H256zm256-768h896v128H512z"></svg:path>`,
})
export class FluentMdl2CollapseContentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
