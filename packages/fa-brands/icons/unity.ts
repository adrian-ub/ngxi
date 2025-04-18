import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsUnityIcon],svg[fa-brands-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m498.11 206.4l-52.8-191.68L248.2 66.08L219 116.14l-59.2-.43L15.54 256l144.28 140.32l59.17-.43l29.24 50l197.08 51.36l52.8-191.62l-30-49.63Zm-274.34-82.2l150.78-37.69L288 232.33H114.87Zm0 263.63l-108.9-108.12H288l86.55 145.81Zm193 14L330.17 256l86.58-145.84L458.56 256Z"></svg:path>`,
})
export class FaBrandsUnityIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
