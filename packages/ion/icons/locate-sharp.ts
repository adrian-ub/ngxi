import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLocateSharpIcon],svg[ion-locate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M256 96V56m0 400v-40m0-304a144 144 0 1 0 144 144a144 144 0 0 0-144-144Zm160 144h40m-400 0h40"></svg:path>`,
})
export class IonLocateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
