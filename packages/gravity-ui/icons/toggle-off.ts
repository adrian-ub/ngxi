import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiToggleOffIcon],svg[gravity-ui-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m3.775 0A5.5 5.5 0 0 0 11 8a5.5 5.5 0 0 0-1.725-4H10.5a4 4 0 0 1 0 8zM0 8a5.5 5.5 0 0 1 5.5-5.5h5a5.5 5.5 0 1 1 0 11h-5A5.5 5.5 0 0 1 0 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiToggleOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
