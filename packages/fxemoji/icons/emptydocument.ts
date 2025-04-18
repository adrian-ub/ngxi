import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiEmptydocumentIcon],svg[fxemoji-emptydocument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F9E7C0" d="M437.567 512H88.004a8.18 8.18 0 0 1-8.182-8.182V8.182A8.18 8.18 0 0 1 88.004 0H288.79l156.96 156.96v346.858a8.183 8.183 0 0 1-8.183 8.182"></svg:path><svg:path fill="#EAC083" d="m288.79 0l156.96 156.96H322.152c-18.426 0-33.363-14.937-33.363-33.363V0z"></svg:path>`,
})
export class FxemojiEmptydocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
