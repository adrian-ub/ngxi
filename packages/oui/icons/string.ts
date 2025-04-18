import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStringIcon],svg[oui-string-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.297 3L8.93 5.102h1.351l-.32 1.828H8.609l-.656 3.883q-.054.398.05.601q.107.203.528.219q.165.008.672-.04L9.016 13.5a4.2 4.2 0 0 1-1.383.195q-1.195-.015-1.79-.703q-.593-.687-.484-1.867l.688-4.195H5l.313-1.828h1.046L6.727 3z"></svg:path>`,
})
export class OuiStringIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
