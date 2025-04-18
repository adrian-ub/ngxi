import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ContentFeedIcon],svg[fluent-mdl2-content-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1920v-128h256v128zm-768 128v-512h1536v512h-128v-384H896v384H768v-384H384v384zm768-896v-128h512v128zm512-896v128h-512V256zM256 1408V768h1536v640zm640-512v384h768V896zm-512 0v384h384V896zM256 0h1536v640H256zm512 512V128H384v384zm896 0V128H896v384z"></svg:path>`,
})
export class FluentMdl2ContentFeedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
