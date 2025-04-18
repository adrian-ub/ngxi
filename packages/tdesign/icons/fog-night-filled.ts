import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFogNightFilledIcon],svg[tdesign-fog-night-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.916.585l-.45 1.675c-.3 1.116-.27 2.337.07 3.604a7 7 0 0 0 9.84 4.476l1.541-.752l-.104 1.71c-.062 1.034-.374 2.06-.919 3.15l-.276.552H2.828l-.304-.746l-.113-.288a8 8 0 0 1-.24-.684C.74 7.947 3.906 2.464 9.24 1.034zM2 17h6v2H2zm8 0h12v2H10zm7 4h5v2h-5zM2 21h13v2H2z"></svg:path>`,
})
export class TdesignFogNightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
