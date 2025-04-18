import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTreeFilledIcon],svg[lsicon-tree-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.146 2.153a.5.5 0 0 1 .354-.146h3a.5.5 0 0 1 .5.5V4.51a.5.5 0 0 1-.5.5H8.497V7h4.5a.5.5 0 0 1 .5.5V10H14.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H9.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H4.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V7.5a.5.5 0 0 1 .5-.5h4.5V5.01H6.5a.5.5 0 0 1-.5-.5V2.508a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTreeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
