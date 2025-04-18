import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeOffFillIcon],svg[gravity-ui-volume-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 11h-3A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h3l2.586-2.586a1.414 1.414 0 0 1 2.414 1v9.172a1.414 1.414 0 0 1-2.414 1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeOffFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
