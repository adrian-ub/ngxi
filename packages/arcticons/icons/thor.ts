import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThorIcon],svg[arcticons-thor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 22.19v-1.383h6.387v1.383m-3.194-1.383v6.067m-1.277.319h2.555m4.258-6.386h1.383v6.067H16.23M17.612 24h4.684m1.384-3.193h-1.384v6.067h1.384"></svg:path><svg:ellipse cx="28.736" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.3" ry="2.981"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.024 27.193v-6.067m-1.278 0H38.4c2.096 0 2.006 2.98 0 2.98h-3.376m2.815 0l1.597 3.087H40.5m-6.54 0h2.554"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path>`,
})
export class ArcticonsThorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
