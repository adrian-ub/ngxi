import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSitedocsIcon],svg[arcticons-sitedocs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.438 34.622H17.903a3.354 3.354 0 0 1 0-6.709h17.889a6.708 6.708 0 0 1 0 13.417H9.972a4.472 4.472 0 0 1-3.873-6.709L20.945 8.906a4.472 4.472 0 0 1 7.746 0l9.037 15.653"></svg:path>`,
})
export class ArcticonsSitedocsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
