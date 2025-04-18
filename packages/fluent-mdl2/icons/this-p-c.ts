import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ThisPCIcon],svg[fluent-mdl2-this-p-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1920v1152h-896v128h256v128H640v-128h256v-128H0zm1792 1024V128H128v896zM228 1536h1464l228 334v50H0v-50zm-20 256h1504l-88-128H296z"></svg:path>`,
})
export class FluentMdl2ThisPCIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
