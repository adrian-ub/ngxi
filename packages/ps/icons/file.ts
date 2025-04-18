import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFileIcon],svg[ps-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 512h343q13 0 22.5-9.5T407 480V32q-2-13-11.5-22.5T373 0H183L0 192v288q0 13 9.5 22.5T32 512M192 43v128q0 13-4 17t-17 4H43zM43 235h128q64 0 64-64V43h128v426H43z"></svg:path>`,
})
export class PsFileIcon {
  readonly viewBox = input("0 0 408 512")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
