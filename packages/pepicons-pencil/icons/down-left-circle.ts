import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilDownLeftCircleIcon],svg[pepicons-pencil-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.354 19.354a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L6.707 15l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M15.75 14.5c.728 0 1.427-.291 1.943-.81s.807-1.226.807-1.963V6a.5.5 0 0 1 1 0v5.727c0 1-.394 1.959-1.097 2.667A3.74 3.74 0 0 1 15.75 15.5H6a.5.5 0 0 1 0-1z"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPencilDownLeftCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
