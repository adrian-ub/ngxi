import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckListIcon],svg[fluent-mdl2-check-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 896V768h1408v128zm0-512h1408v128H640zm0 896v-128h1408v128zm0 384v-128h1408v128zM192 469l211-210l90 90l-301 301L19 477l90-90zm0 384l211-210l90 90l-301 301L19 861l90-90zm0 384l211-210l90 90l-301 301l-173-173l90-90zm0 384l211-210l90 90l-301 301l-173-173l90-90z"></svg:path>`,
})
export class FluentMdl2CheckListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
