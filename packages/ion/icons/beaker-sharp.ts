import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBeakerSharpIcon],svg[ion-beaker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453.55 54.7L464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0 0 20 20h312a20 20 0 0 0 20-20V96c0-17.16 2.28-34.14 5.55-41.3M416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A222 222 0 0 0 416 96"></svg:path>`,
})
export class IonBeakerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
