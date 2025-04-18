import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeLeftSharpIcon],svg[material-symbols-light-swipe-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.385V3h.885v2.506q1.992-1.533 4.013-2.279t4.16-.746q2.996 0 5.44 1.338T21 7.385h-.94q-1.143-1.87-3.28-2.944t-4.722-1.075q-2.085 0-4.052.774T4.1 6.5h3.285v.885zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v7.77h1.827V10h1v4.27h1.846V11h1v3.27H18V13h1v8z"></svg:path>`,
})
export class MaterialSymbolsLightSwipeLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
