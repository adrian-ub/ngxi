import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoftWordIcon],svg[arcticons-microsoft-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 16v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 18.5l3.25 11m3.25-11l-3.25 11m3.25-11l3.25 11m3.25-11l-3.25 11M13.23 14V8.5a4 4 0 0 1 4-4H38.5a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H17.23a4 4 0 0 1-4-4V34"></svg:path>`,
})
export class ArcticonsMicrosoftWordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
