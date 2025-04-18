import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTemplatorOutlineIcon],svg[bubbles-plugin-templator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.538 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M9.95 19.837a3.913 3.913 0 1 1-7.826 0V3.207A1.957 1.957 0 0 1 4.081 1.25h3.913A1.957 1.957 0 0 1 9.95 3.207z"></svg:path><svg:path d="M9.393 21.852L17.742 7.39a1.957 1.957 0 0 0-.716-2.673l-3.389-1.956A1.95 1.95 0 0 0 12.62 2.5"></svg:path><svg:path d="m8.043 23.2l14.354-8.29a1.957 1.957 0 0 0 .716-2.672L21.156 8.85a1.9 1.9 0 0 0-.5-.57"></svg:path></svg:g>`,
})
export class BubblesPluginTemplatorOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
