import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBonbonIcon],svg[arcticons-bonbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="5.406" height="7.163" x="21.308" y="14.649" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.703" ry="2.703"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.343 21.812v-4.46a2.703 2.703 0 0 1 2.703-2.703h0a2.703 2.703 0 0 1 2.703 2.703v4.46m-21.498-4.46a2.703 2.703 0 0 1 2.703-2.703h0a2.703 2.703 0 0 1 2.703 2.703v1.757a2.703 2.703 0 0 1-2.703 2.703h0a2.703 2.703 0 0 1-2.703-2.703m0 0V11"></svg:path><svg:rect width="5.406" height="7.163" x="21.308" y="27.837" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.703" ry="2.703"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.343 35v-4.46a2.703 2.703 0 0 1 2.703-2.703h0a2.703 2.703 0 0 1 2.703 2.703V35m-21.498-4.46a2.703 2.703 0 0 1 2.703-2.703h0a2.703 2.703 0 0 1 2.703 2.703v1.757A2.703 2.703 0 0 1 15.955 35h0a2.703 2.703 0 0 1-2.703-2.703m-.001 0v-8.109"></svg:path>`,
})
export class ArcticonsBonbonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
