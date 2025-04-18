import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonArrowBack24RegularIcon],svg[fluent-person-arrow-back-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.314 15.5a6.5 6.5 0 0 1 .708-1.5h-7.77a2.25 2.25 0 0 0-2.248 2.248v.578c0 .892.318 1.756.898 2.435C4.468 21.095 6.854 22 10 22q1.397 0 2.592-.239a6.5 6.5 0 0 1-.913-1.367q-.786.105-1.679.105c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM10 2.003a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L15.707 17h2.043A2.25 2.25 0 0 1 20 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 17.75 16h-2.043z"></svg:path>`,
})
export class FluentPersonArrowBack24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
