import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShizukuIcon],svg[arcticons-shizuku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.31 33.96h1.44L35.5 24l-5.75-9.96h-11.5l-2.81 4.87"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.65 42.5l1.92-5.28a13.3 13.3 0 0 0 .16-8.63l.34-.62a12.13 12.13 0 0 0 1.14-6.35a12 12 0 0 0-5.92.3l-.21.07a13.5 13.5 0 0 0-3.49-1.9h0a13.5 13.5 0 0 0-3.91-.79l-.11-.19a12.1 12.1 0 0 0-4.34-4A12 12 0 0 0 8 20.67q-.09.34-.15.69a13.7 13.7 0 0 0-2.35 1.92"></svg:path><svg:circle cx="12.35" cy="25.53" r="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.63" cy="28.91" r="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsShizukuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
