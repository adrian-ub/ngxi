import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationLeftFilledIcon],svg[lsicon-rotation-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.736 3.626l1.5-1.593l.728.685l-.707.75H9.5a4.5 4.5 0 0 1 4.5 4.5v.061h-1v-.06a3.5 3.5 0 0 0-3.5-3.5H8.258l.706.75l-.728.685l-1.5-1.593a.5.5 0 0 1 0-.685m-4.59 3.547a.5.5 0 0 1 .354-.146h8a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRotationLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
