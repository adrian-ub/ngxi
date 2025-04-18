import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilContactIcon],svg[cil-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 48H40a24.03 24.03 0 0 0-24 24v368a24.03 24.03 0 0 0 24 24h88v-58.822a20.01 20.01 0 0 1 10.284-17.478l91.979-51.123L200 260.919V200a56 56 0 0 1 112 0v60.919l-30.263 75.655l91.979 51.126A20.01 20.01 0 0 1 384 405.178V464h88a24.03 24.03 0 0 0 24-24V72a24.03 24.03 0 0 0-24-24m-8 384h-48v-26.822a52.03 52.03 0 0 0-26.738-45.451L321.915 322.3L344 267.081V200a88 88 0 0 0-176 0v67.081l22.085 55.219l-67.347 37.432A52.03 52.03 0 0 0 96 405.178V432H48V80h416Z"></svg:path>`,
})
export class CilContactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
