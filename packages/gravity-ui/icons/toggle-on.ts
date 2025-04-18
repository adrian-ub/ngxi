import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiToggleOnIcon],svg[gravity-ui-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 8a5.5 5.5 0 0 1 5.5-5.5h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 0 8m6.5 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiToggleOnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
