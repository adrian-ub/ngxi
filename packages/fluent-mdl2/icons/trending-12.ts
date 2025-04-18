import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Trending12Icon],svg[fluent-mdl2-trending-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 341v683h-171V633l-768 768l-341-342l-665 665l-121-120l786-786l341 341l648-647h-392V341z"></svg:path>`,
})
export class FluentMdl2Trending12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
