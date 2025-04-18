import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionDesktopSharpIcon],svg[ion-desktop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 48H32a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-20 36v216H52V84ZM240.13 354.08a16 16 0 1 1 13.79 13.79a16 16 0 0 1-13.79-13.79"></svg:path>`,
})
export class IonDesktopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
