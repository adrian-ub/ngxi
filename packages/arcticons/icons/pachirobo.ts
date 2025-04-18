import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPachiroboIcon],svg[arcticons-pachirobo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11h39v26h-39z"></svg:path><svg:ellipse cx="15.5" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.5" ry="11"></svg:ellipse><svg:ellipse cx="32.5" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.5" ry="11"></svg:ellipse><svg:ellipse cx="20" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4.5"></svg:ellipse><svg:ellipse cx="28" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4.5"></svg:ellipse>`,
})
export class ArcticonsPachiroboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
