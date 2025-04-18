import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EventDeclinedIcon],svg[fluent-mdl2-event-declined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1152h-128V640H128v1152h1152v128H0V128h384V0h128v128h1024V0h128v128zm-128 384V256h-256v128h-128V256H512v128H384V256H128v256zm125 990l-226 226l226 227l-90 90l-227-226l-227 227l-90-91l227-227l-227-227l90-90l227 227l227-227z"></svg:path>`,
})
export class FluentMdl2EventDeclinedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
