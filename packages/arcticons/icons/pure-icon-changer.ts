import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPureIconChangerIcon],svg[arcticons-pure-icon-changer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="19.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24v19.5M19.692 24A4.308 4.308 0 1 1 24 19.692V24zM24 19.692A4.308 4.308 0 1 1 28.308 24H24zM28.308 24A4.308 4.308 0 1 1 24 28.308V24zM24 28.308A4.308 4.308 0 1 1 19.692 24H24z"></svg:path>`,
})
export class ArcticonsPureIconChangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
