import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCommitsIcon],svg[gravity-ui-code-commits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCodeCommits0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.25h-.008a1.25 1.25 0 1 0 .016 0zm.75-2.5v1.104a2.751 2.751 0 0 1 0 5.292v1.708a2.751 2.751 0 0 1 0 5.293v1.103a.75.75 0 0 1-1.5 0v-1.104a2.751 2.751 0 0 1 0-5.292V7.147a2.751 2.751 0 0 1 0-5.293V.75a.75.75 0 0 1 1.5 0m-.745 12h-.01a1.25 1.25 0 1 1 .01 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCodeCommits0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCodeCommitsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
