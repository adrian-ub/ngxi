import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextGrammarArrowRight20RegularIcon],svg[fluent-text-grammar-arrow-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm7.243 3q.381.462.657 1h7.1a.5.5 0 0 0 0-1zM11 14.5q0 .252-.022.5H17.5a.5.5 0 0 0 0-1h-6.522q.021.248.022.5m-10 0a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m4.146 2.354a.5.5 0 0 0 .708-.708L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0-.146.351v.006a.5.5 0 0 0 .144.348l.003.003z"></svg:path>`,
})
export class FluentTextGrammarArrowRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
