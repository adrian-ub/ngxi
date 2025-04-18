import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon],svg[streamline-interface-arrows-vertical-expand-1-move-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 5.1L6.74.61a.36.36 0 0 1 .52 0l4.49 4.49m-9.5 3.8l4.49 4.49a.36.36 0 0 0 .52 0l4.49-4.49"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
