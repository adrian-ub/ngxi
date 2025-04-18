import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BlogIcon],svg[fluent-mdl2-blog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v1536H731l-475 475v-475H0V0zM128 128v256h1792V128zm1792 1280V512H128v896h256v293l293-293zm-640-768h512v640h-512zm128 512h256V768h-256zM256 768h896v128H256zm0 256h896v128H256z"></svg:path>`,
})
export class FluentMdl2BlogIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
