import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBoxingIcon],svg[whh-boxing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M551 612q9-25 14.5-38.5t16-33.5t19-31t22.5-24.5t29.5-20.5t37-11.5T736 448q66 0 113 47t47 113q0 74-51 136.5T704 846v114q0 27-75 45.5T448 1024t-181-18.5t-75-45.5V815q-89-62-140.5-158.5T0 448q0-91 35.5-174T131 131t143-95.5T448 0q75 0 141.5 13t122 38.5t88 70T832 224q0 45-15.5 78.5t-41 50t-51 24T672 384q-51 0-105.5 54T512 544q0 40 39 68"></svg:path>`,
})
export class WhhBoxingIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
