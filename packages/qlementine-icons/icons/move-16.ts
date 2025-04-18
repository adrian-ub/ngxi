import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMove16Icon],svg[qlementine-icons-move-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.15 5.15a.5.5 0 1 1 .708.708l-1.15 1.15h2.79a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5h-2.79l1.15 1.15a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1-.147-.354a.5.5 0 0 1 .147-.354l2-2zm5-5a.5.5 0 0 1 .354-.147a.5.5 0 0 1 .354.147l2 2a.5.5 0 0 1-.708.708L8 1.708v2.79a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-2.79l-1.15 1.15a.5.5 0 1 1-.708-.708l2-2zm5.71 5a.5.5 0 1 0-.708.708l1.15 1.15h-2.79a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5h2.79l-1.15 1.15a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 .147-.354a.5.5 0 0 0-.147-.354l-2-2zM8.01 13.3v-2.79a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v2.79l-1.15-1.15a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .354.147a.5.5 0 0 0 .354-.147l2-2a.5.5 0 1 0-.708-.708l-1.15 1.15z"></svg:path>`,
})
export class QlementineIconsMove16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
