import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckListCheckIcon],svg[fluent-mdl2-check-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M493 349L192 650L19 477l90-90l83 82l211-210zM192 1621l211-210l90 90l-301 301l-173-173l90-90zm0-768l211-210l90 90l-301 301L19 861l90-90zm0 384l211-210l90 90l-301 301l-173-173l90-90z"></svg:path>`,
})
export class FluentMdl2CheckListCheckIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
