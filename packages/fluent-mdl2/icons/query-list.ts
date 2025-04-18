import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QueryListIcon],svg[fluent-mdl2-query-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 128H0V0h1664zm0 512H0V512h1664zM0 1024h768v128H0zm2048 0v219l-384 384v421h-384v-421l-384-384v-219zm-128 128h-896v37l384 384v347h128v-347l384-384z"></svg:path>`,
})
export class FluentMdl2QueryListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
