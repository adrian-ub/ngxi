import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGatherFilledIcon],svg[lsicon-gather-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h4v1H3v5.5h3a.5.5 0 0 1 .5.5a1.5 1.5 0 1 0 3 0a.5.5 0 0 1 .5-.5h3V3H9.5V2h4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zm5.5 3.793V2h1v4.293l1.146-1.147l.708.708l-2 2a.5.5 0 0 1-.708 0l-2-2l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGatherFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
