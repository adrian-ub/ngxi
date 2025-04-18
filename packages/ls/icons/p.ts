import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPIcon],svg[ls-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 113v97c53-58 132-97 216-97c152 0 275 121 275 271S440 654 288 654c-84 0-163-38-216-96v309H0V113zm215 474c115 0 207-90 207-203s-92-204-207-204S72 271 72 384s100 203 215 203"></svg:path>`,
})
export class LsPIcon {
  readonly viewBox = input("0 0 563 867")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
