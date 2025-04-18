import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileDocOutlineIcon],svg[lsicon-file-doc-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M15 7.5h-2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2m-3.5 2v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6m-7 1.5h2A.5.5 0 0 1 7 8v3a.5.5 0 0 1-.5.5h-2zm4.5 4h1.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5Z"></svg:path>`,
})
export class LsiconFileDocOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
