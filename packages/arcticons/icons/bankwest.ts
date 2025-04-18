import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBankwestIcon],svg[arcticons-bankwest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 21.438l1.768-1.812c.976-1 .976-2.622 0-3.623c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623l8.536 8.747a2.61 2.61 0 0 1 0 3.624c-.977 1-2.56 1-3.536 0a2.607 2.607 0 0 1 0-3.623l8.536-8.747a2.61 2.61 0 0 0 0-3.624c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623l8.536 8.747a2.61 2.61 0 0 1 0 3.624c-.977 1-2.56 1-3.536 0a2.607 2.607 0 0 1 0-3.623l8.536-8.747a2.61 2.61 0 0 0 0-3.624c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623L34 21.439"></svg:path>`,
})
export class ArcticonsBankwestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
