import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhResidentevilIcon],svg[whh-residentevil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H320L0 704V320L320 0h384l320 320v384zM448 512L64 335v354zM335 960h354L512 576zm177-512L689 64H335zm64 64l384 177V335z"></svg:path>`,
})
export class WhhResidentevilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
