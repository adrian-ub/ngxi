import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ImportIcon],svg[fluent-mdl2-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M557 589L249 898h1543v128H252l305 305l-90 90L6 960l461-461zm1363-77h128v896h-128z"></svg:path>`,
})
export class FluentMdl2ImportIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
