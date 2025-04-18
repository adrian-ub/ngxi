import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeMuteOutlineIcon],svg[lsicon-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.7 3.757a6 6 0 0 1 1.3 6.54c-.188.453-.231.59-.522.984m-2.206-2.447s.228-.44.228-.834a3 3 0 0 0-.879-2.121m-5.375-.57C5.08 5.45 5 5.5 5 5.5H2.5v5H5l3.5 3V8.834M6.43 4.265L8.5 2.5v3.575M2 2l12 12"></svg:path>`,
})
export class LsiconVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
