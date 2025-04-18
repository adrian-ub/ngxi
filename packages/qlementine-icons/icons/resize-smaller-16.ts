import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsResizeSmaller16Icon],svg[qlementine-icons-resize-smaller-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 1a.5.5 0 0 1 .5.5v3.79l4.15-4.15a.5.5 0 0 1 .707.707l-4.15 4.15h3.79a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5zm-3 14a.5.5 0 0 1-.5-.5v-3.79l-4.15 4.15a.5.5 0 0 1-.707-.707l4.15-4.15h-3.79a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class QlementineIconsResizeSmaller16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
