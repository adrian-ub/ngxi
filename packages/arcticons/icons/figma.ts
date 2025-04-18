import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFigmaIcon],svg[arcticons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.5" cy="24" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 30.5A6.5 6.5 0 1 0 24 37v-6.5zm13-13a6.5 6.5 0 1 0 0-13H24v13zm-13-13a6.5 6.5 0 1 0 0 13H24v-13zm0 13a6.5 6.5 0 1 0 0 13H24v-13z"></svg:path>`,
})
export class ArcticonsFigmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
