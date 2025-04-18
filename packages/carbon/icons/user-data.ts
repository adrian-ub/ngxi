import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUserDataIcon],svg[carbon-user-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h2v8h-2zm-5-3h2v11h-2zm-5 5h2v6h-2zm-2 20h-2v-6a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v6H2v-6a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zM9 9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonUserDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
