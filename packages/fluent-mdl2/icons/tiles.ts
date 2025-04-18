import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TilesIcon],svg[fluent-mdl2-tiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 256v640H0V256zm-128 512V384H128v384zm256-512h640v640h-640zm512 512V384h-384v384zM768 1664v-640h1280v640zm128-512v384h1024v-384zM0 1664v-640h640v640zm128-512v384h384v-384z"></svg:path>`,
})
export class FluentMdl2TilesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
