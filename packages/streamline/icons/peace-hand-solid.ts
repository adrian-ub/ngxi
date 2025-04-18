import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceHandSolidIcon],svg[streamline-peace-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.558 9.273c.336-2.05-1.89-2.892-4.355-3.37l.316-4.581a1.236 1.236 0 0 0-2.462-.229l-.513 4.324l-1.132-4.11A1.42 1.42 0 0 0 2.728.308a1.31 1.31 0 0 0-.97 1.624l1.24 4.654H6.78a1.723 1.723 0 0 1 .402 3.399l-.112.026c.384.39.681.932.707 1.624a.625.625 0 1 1-1.249.048c-.016-.425-.238-.742-.543-.961c-.335-.24-.662-.287-.75-.272a.625.625 0 0 1-.246-1.225L6.89 8.77a.473.473 0 0 0-.11-.933H3.295c-.942.016-1.812.678-1.873 1.62c-.076 1.18.11 2.556 1.207 3.511c.348.303.671.588.89.781c.184.162.42.251.664.251h6.076c.261 0 .515-.1.688-.295c1.158-1.315 1.382-2.872 1.543-3.987q.034-.238.067-.445Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePeaceHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
