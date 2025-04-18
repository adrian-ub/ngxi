import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEMobiledataRoundedIcon],svg[material-symbols-light-e-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.213 0-.356-.144T8.5 16.5v-9q0-.213.144-.356T9 7h6q.213 0 .356.144t.144.357t-.144.356T15 8H9.5v3.5H15q.213 0 .356.144t.144.357t-.144.356T15 12.5H9.5V16H15q.213 0 .356.144t.144.357t-.144.356T15 17z"></svg:path>`,
})
export class MaterialSymbolsLightEMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
