import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPasteIconPackIcon],svg[arcticons-paste-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.585 36.608c14.33-11.029 21.06 3.032 37.097-3.942M2.5 24c16.565-6.832 30.469 1.638 39.386-11.933M2.92 19.76c11.828-6.685 24.108-.825 30.147-15.26"></svg:path>`,
})
export class ArcticonsPasteIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
