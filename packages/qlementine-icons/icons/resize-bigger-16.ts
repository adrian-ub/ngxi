import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsResizeBigger16Icon],svg[qlementine-icons-resize-bigger-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 7a.5.5 0 0 1-.5-.5V2.71L9.85 6.86a.5.5 0 0 1-.707-.707l4.15-4.15h-3.79a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zm-13 2a.5.5 0 0 1 .5.5v3.79l4.15-4.15a.5.5 0 0 1 .707.707l-4.15 4.15h3.79a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class QlementineIconsResizeBigger16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
