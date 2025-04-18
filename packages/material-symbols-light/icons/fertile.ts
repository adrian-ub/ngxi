import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFertileIcon],svg[material-symbols-light-fertile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.709q-1.643-.708-2.859-1.923T3.709 15.51T3 12V4.5l5.275 3.967q.852-1.31 1.791-2.55q.94-1.24 1.934-2.398q.894 1.039 1.842 2.288t1.858 2.66L21 4.5V12q0 1.868-.708 3.51t-1.924 2.858t-2.856 1.923t-3.509.709"></svg:path>`,
})
export class MaterialSymbolsLightFertileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
