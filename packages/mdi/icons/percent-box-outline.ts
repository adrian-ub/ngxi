import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPercentBoxOutlineIcon],svg[mdi-percent-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-2-3.78c0 .98-.8 1.78-1.78 1.78s-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77m-8.5 1.81L7 15.53L15.53 7l1.5 1.5zm-1.45-8.2c0-.99.79-1.78 1.78-1.78c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77"></svg:path>`,
})
export class MdiPercentBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
