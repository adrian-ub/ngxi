import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLayersSharpIcon],svg[ion-layers-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 150L256 48L32 150l224 104zM255.71 392.95l-144.81-66.2L32 362l224 102l224-102l-78.69-35.3z"></svg:path><svg:path fill="currentColor" d="m480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102z"></svg:path>`,
})
export class IonLayersSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
