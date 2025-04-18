import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPersonPlusOffIcon],svg[pepicons-pencil-person-plus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.95 6.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M15 10a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 1 0V9.5a.5.5 0 0 1-.5.5M6.8 3a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M3.3 5.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path><svg:path d="M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0z"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilPersonPlusOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
