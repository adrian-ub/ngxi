import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDawdleIcon],svg[arcticons-dawdle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.774 31.082l.87-6.367l8.836-1.611l-19.152-8.506L3.5 15.808l6.09 2.823l-1.212 8.872m26.396 3.579s-17.423 4.222-26.396-3.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.197 18.93L44.5 23.167v10.234"></svg:path>`,
})
export class ArcticonsDawdleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
