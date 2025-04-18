import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHPlusMobiledataRoundedIcon],svg[material-symbols-light-h-plus-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 12.5v4q0 .213-.144.356T5.115 17t-.356-.144t-.143-.356v-9q0-.213.143-.356Q4.903 7 5.116 7t.356.144t.143.356v4h7v-4q0-.213.144-.356q.144-.144.357-.144t.356.144t.144.356v9q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356v-4zm12.769 0h-1.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h1.5V10q0-.213.144-.356t.356-.144t.356.144t.144.356v1.5h1.5q.212 0 .356.144t.144.357t-.144.356t-.356.143h-1.5V14q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.144-.356z"></svg:path>`,
})
export class MaterialSymbolsLightHPlusMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
