import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconIssueClosedIcon],svg[codicon-issue-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 13a5.5 5.5 0 0 0 5.498-5.354l.953-.952a6.5 6.5 0 1 1-1.208-3.038l-.717.718A5.5 5.5 0 1 0 7.5 13zm6.197-7.467L15 4.23l-.71-.71l-3.41 3.42L9.5 5.56l-.71.71L10.52 8h.71l1.65-1.65l.817-.817zM7 7v2h1V4H7v3zm0 4v-1h1v1H7z"></svg:path></svg:g>`,
})
export class CodiconIssueClosedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
