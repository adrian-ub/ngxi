import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CollapseMenuIcon],svg[fluent-mdl2-collapse-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 768V640h1792v128zm0-640h1792v128H128zm0 1152v-128h1792v128zm0 512v-128h1792v128z"></svg:path>`,
})
export class FluentMdl2CollapseMenuIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
