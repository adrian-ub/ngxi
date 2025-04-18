import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIosLauncherIcon],svg[arcticons-ios-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="11.685" cy="18.031" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.685 22.18v8.975m17.108-1.485c.83 1.082 1.873 1.485 3.322 1.485h2.005a3.38 3.38 0 0 0 3.38-3.38v-.014a3.38 3.38 0 0 0-3.38-3.38h-2.212a3.383 3.383 0 0 1-3.383-3.383h0a3.39 3.39 0 0 1 3.39-3.39h1.995c1.45 0 2.49.402 3.322 1.484"></svg:path><svg:rect width="8.975" height="13.547" x="15.909" y="17.607" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.487" ry="4.487"></svg:rect>`,
})
export class ArcticonsIosLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
