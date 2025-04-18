import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidclassicIcon],svg[arcticons-fdroidclassic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.98" cy="15.94" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31" cy="15.94" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="27.32" height="12.99" x="10.34" y="9.17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.8"></svg:rect><svg:rect width="31.32" height="20.31" x="8.34" y="22.15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.03"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.94h-1a1 1 0 0 1-1-1v-9.4m29.32 10.4h1a1 1 0 0 0 1-1v-9.4M22.55 6h2.9a1 1 0 0 1 .95.7l.78 2.49h-6.36l.78-2.49a1 1 0 0 1 .95-.7"></svg:path>`,
})
export class ArcticonsFdroidclassicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
