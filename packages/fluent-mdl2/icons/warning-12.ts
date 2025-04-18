import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Warning12Icon],svg[fluent-mdl2-warning-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1884 2048H-7L939 57zM263 1877h1351L939 455zm761-1024v555H853V853zm-171 683h171v171H853z"></svg:path>`,
})
export class FluentMdl2Warning12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
