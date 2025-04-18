import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCisojr4droidIcon],svg[arcticons-cisojr4droid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.163 41.545A17.65 17.65 0 0 1 6.517 27.463M22.909 6.48q.466-.025.933-.025a17.65 17.65 0 0 1 17.642 17.198"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.909 9.69q.258-.01.516-.01A13.55 13.55 0 0 1 36.99 23.22h0q0 .217-.007.434M21.117 36.562a13.56 13.56 0 0 1-10.583-9.13"></svg:path><svg:ellipse cx="23.841" cy="23.658" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.364" ry="2.503"></svg:ellipse><svg:circle cx="23.841" cy="23.652" r="6.019" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsCisojr4droidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
