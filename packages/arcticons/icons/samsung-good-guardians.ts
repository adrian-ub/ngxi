import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungGoodGuardiansIcon],svg[arcticons-samsung-good-guardians-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="33.25" cy="14.75" r="9.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24h18.5v18.5H24zm0 18.5C13.783 42.5 5.5 34.217 5.5 24H24zM5.5 24C5.5 13.783 13.783 5.5 24 5.5V24z"></svg:path>`,
})
export class ArcticonsSamsungGoodGuardiansIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
