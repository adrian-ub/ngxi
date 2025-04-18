import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilExpandIcon],svg[pepicons-pencil-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.354 9.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708zm-6 6a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M5 15.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M5.5 15a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0zm10-6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M11 5.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class PepiconsPencilExpandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
