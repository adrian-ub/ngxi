import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightEjectIcon],svg[mdi-light-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.33 15l6.17-9.25L17.67 15zM5 18h13v1H5zm2-3.97h9l-4.5-6.78z"></svg:path>`,
})
export class MdiLightEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
