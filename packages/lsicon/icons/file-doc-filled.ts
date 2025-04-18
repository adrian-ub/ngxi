import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileDocFilledIcon],svg[lsicon-file-doc-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a.5.5 0 0 1-.5-.5zM5 8v3h1.5V8zm3 0a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm2.5 0H9v3h1.5zM12 8a1 1 0 0 1 1-1h2v1h-2v3h2v1h-2a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileDocFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
