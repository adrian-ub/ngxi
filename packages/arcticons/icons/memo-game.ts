import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMemoGameIcon],svg[arcticons-memo-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h10v10h-10zm13.5 0h10v10H19zm13.5 0h10v10h-10zM5.5 19h10v10h-10zM19 19h10v10H19zm13.5 0h10v10h-10zm-27 13.5h10v10h-10zm13.5 0h10v10H19zm13.5 0h10v10h-10z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 22h4v4h-4zm27-13.5h4v4h-4z"></svg:path>`,
})
export class ArcticonsMemoGameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
