import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDuoIcon],svg[material-symbols-light-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51q.709-1.643 1.924-2.859T8.49 3.709T12 3h7.385q.69 0 1.152.463T21 4.615V12q0 1.868-.708 3.51t-1.924 2.858t-2.856 1.923t-3.509.709M7.77 14.346h6v-2l3 2v-5l-3 2v-2h-6z"></svg:path>`,
})
export class MaterialSymbolsLightDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
