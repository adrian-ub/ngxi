import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2KnowledgeArticleIcon],svg[fluent-mdl2-knowledge-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H128V0h1115zm-512-37h293l-293-293zm384 128h-512V128H256v1792h1408zm-640 0H384V512h640zM384 768h1152v128H384zm0 256h1152v128H384zm0 256h1152v128H384zm0 256h1152v128H384z"></svg:path>`,
})
export class FluentMdl2KnowledgeArticleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
