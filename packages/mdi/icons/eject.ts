import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEjectIcon],svg[mdi-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5L5.33 15h13.34M5 17h14v2H5z"></svg:path>`,
})
export class MdiEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
