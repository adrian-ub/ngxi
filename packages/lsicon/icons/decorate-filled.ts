import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDecorateFilledIcon],svg[lsicon-decorate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V5H3v3h5a.5.5 0 0 1 .5.5V10H9a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 7 10h.5V9h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDecorateFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
