import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPullRequestIcon],svg[eos-icons-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17.184V8.816a3 3 0 1 0-2 0v8.368a3 3 0 1 0 2 0m14 0V7a2 2 0 0 0-2-2h-5.172l1.586-1.586L13 2l-2.586 2.586L9 6l1.414 1.414L13 10l1.414-1.414L12.828 7H18v10.184a3 3 0 1 0 2 0"></svg:path>`,
})
export class EosIconsPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
