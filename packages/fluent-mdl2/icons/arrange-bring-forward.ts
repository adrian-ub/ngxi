import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrangeBringForwardIcon],svg[fluent-mdl2-arrange-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1664H0V0h1664zM1536 128H128v1408h1408zm512 640v1280H768v-256h128v128h1024V896h-128V768z"></svg:path>`,
})
export class FluentMdl2ArrangeBringForwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
