import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPk1x1Icon],svg[flag-pk-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPk1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagPk1x10)"><svg:path fill="#0c590b" d="M-95 0h768v512H-95z"></svg:path><svg:path fill="#fff" d="M-95 0H97.5v512H-95z"></svg:path><svg:g fill="#fff"><svg:path d="m403.7 225.4l-31.2-6.6l-16.4 27.3l-3.4-31.6l-31-7.2l29-13l-2.7-31.7l21.4 23.6l29.3-12.4l-15.9 27.6l21 24z"></svg:path><svg:path d="M415.4 306a121 121 0 0 1-161.3 59.4a122 122 0 0 1-59.5-162.1A119 119 0 0 1 266 139a156 156 0 0 0-11.8 10.9A112.3 112.3 0 0 0 415.5 306z"></svg:path></svg:g></svg:g>`,
})
export class FlagPk1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
