import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDragFilledIcon],svg[lsicon-drag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 4.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 7.995a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 11.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDragFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
