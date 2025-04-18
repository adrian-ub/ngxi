import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSilentnotesIcon],svg[arcticons-silentnotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="19.05" cy="23.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.95" ry="5.508"></svg:ellipse><svg:circle cx="19.592" cy="24.691" r="2.014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="28.95" cy="23.636" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.95" ry="5.508"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.72 30.259c-.624 1.337-1.412 1.783-2.72 1.783s-2.096-.446-2.72-1.784m9.655-11.668L24 3.5l-6.935 15.09"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.613 28.277V44.5H16.387V28.277"></svg:path><svg:circle cx="28.408" cy="24.691" r="2.014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.078 10.176s-.922.49-3.078.49s-3.078-.49-3.078-.49"></svg:path>`,
})
export class ArcticonsSilentnotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
