import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsQrCodeSharpIcon],svg[famicons-qr-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336h80v80h-80zm-64-64h64v64h-64zm144 144h64v64h-64zm16-144h48v48h-48zM272 432h48v48h-48zm64-336h80v80h-80z"></svg:path><svg:path fill="currentColor" d="M480 240H272V32h208Zm-164-44h120V76H316ZM96 96h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 240H32V32h208ZM76 196h120V76H76Zm20 140h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 480H32V272h208ZM76 436h120V316H76Z"></svg:path>`,
})
export class FamiconsQrCodeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
