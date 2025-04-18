import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnikiIcon],svg[arcticons-aniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="15.621" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.398" ry="2.905"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5h-7.171l3.981-17.426m-.031-.006a11.023 11.023 0 1 1 6.411.009"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.5h7.171l-3.98-17.419l-.001-.007"></svg:path><svg:ellipse cx="23.966" cy="15.608" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.126" ry="6.926"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.972 12.966L26.495 9.3m-.405 4.899l3.036-2.322"></svg:path>`,
})
export class ArcticonsAnikiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
