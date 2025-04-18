import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnknown5Icon],svg[material-symbols-light-unknown-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12v-1h7v1zm7 9q-1.789 0-3.434-.67t-2.935-1.96l.707-.708q1.175 1.1 2.631 1.719T12 20q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4V3q1.864 0 3.503.71q1.64.711 2.858 1.93t1.929 2.857Q21 10.137 21 12q0 1.858-.71 3.5q-.711 1.642-1.93 2.86t-2.857 1.93T12 21"></svg:path>`,
})
export class MaterialSymbolsLightUnknown5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
