import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAtlassianIcon],svg[simple-icons-atlassian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.12 11.084a.683.683 0 0 0-1.16.126L.075 22.974a.703.703 0 0 0 .63 1.018h8.19a.68.68 0 0 0 .63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.52 15.52 0 0 0-.906 15.317l3.95 7.9a.7.7 0 0 0 .628.388h8.19a.703.703 0 0 0 .63-1.017L12.63.38a.664.664 0 0 0-1.196.006"></svg:path>`,
})
export class SimpleIconsAtlassianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
