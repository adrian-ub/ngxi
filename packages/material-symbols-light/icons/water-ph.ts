import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterPhIcon],svg[material-symbols-light-water-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.423 21v-5.384h3.5q.37 0 .627.276q.258.277.258.647v1.653q0 .37-.258.627t-.627.258h-2.615V21zm6.077 0v-5.384h.885v2H21v-2h.885V21H21v-2.5h-2.616V21zm-5.192-2.808h2.615V16.5h-2.615zM9.423 20.97q-2.78-.215-4.602-2.23Q3 16.723 3 13.8q0-2.154 1.738-4.765T10 3.308q3.429 3.04 5.166 5.583T17 13.57v.046h-5.961q-.667 0-1.141.475t-.475 1.14z"></svg:path>`,
})
export class MaterialSymbolsLightWaterPhIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
