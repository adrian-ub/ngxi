import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSoapIcon],svg[fa6-solid-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a48 48 0 1 0 0-96a48 48 0 1 0 0 96m112 160a64 64 0 1 0 0-128a64 64 0 1 0 0 128m96-224a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0 160c0 27.6-11.7 52.5-30.4 70.1c36.5 13.6 62.4 48.7 62.4 89.9c0 53-43 96-96 96H160c-53 0-96-43-96-96s43-96 96-96h88.4c-15.2-17-24.4-39.4-24.4-64H96c-53 0-96 43-96 96v128c0 53 43 96 96 96h320c53 0 96-43 96-96V288c0-53-43-96-96-96m-256 96c-35.3 0-64 28.7-64 64s28.7 64 64 64h192c35.3 0 64-28.7 64-64s-28.7-64-64-64z"></svg:path>`,
})
export class Fa6SolidSoapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
