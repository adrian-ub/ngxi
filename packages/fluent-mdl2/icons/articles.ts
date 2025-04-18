import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArticlesIcon],svg[fluent-mdl2-articles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 768v128H512V768zm-256-512v128H512V256zm-256 1536v-640h512v640zm128-512v384h256v-384zm384-768v128H512V512zM256 0h1536v2048H256zm1408 1920V128H384v1792zm-768-256v128H512v-128zm0-512v128H512v-128zm0 256v128H512v-128z"></svg:path>`,
})
export class FluentMdl2ArticlesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
