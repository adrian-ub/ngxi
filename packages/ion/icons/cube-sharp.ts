import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCubeSharpIcon],svg[ion-cube-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 170v196.92L240 480V284zm224 310l192-113.08V170L272 284Zm176-336L256 32L64 144l192 112z"></svg:path>`,
})
export class IonCubeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
