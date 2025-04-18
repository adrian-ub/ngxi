import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMapsUgcIcon],svg[material-symbols-maps-ugc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 23l1.95-6.7q-.475-1.025-.712-2.1T2 12q0-2.075.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22q-1.125 0-2.2-.238t-2.1-.712zm10-7h2v-3h3v-2h-3V8h-2v3H8v2h3z"></svg:path>`,
})
export class MaterialSymbolsMapsUgcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
