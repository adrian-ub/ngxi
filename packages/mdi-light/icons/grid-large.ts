import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightGridLargeIcon],svg[mdi-light-grid-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v8h8V6a2 2 0 0 0-2-2zm8 9h-8v8h6a2 2 0 0 0 2-2zm-9 8v-8H3v6a2 2 0 0 0 2 2zm-8-9h8V4H5a2 2 0 0 0-2 2zm2-9h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiLightGridLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
