import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixWallpapersIcon],svg[arcticons-pix-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.001 16.552l-11.12 19.26c-.94 1.63.235 3.666 2.116 3.666h22.24c1.882 0 3.058-2.036 2.117-3.666l-11.12-19.26c-.94-1.63-3.292-1.63-4.233 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.223 30.024L15.53 25.36c-.723-1.25-2.529-1.25-3.251 0L5.754 36.663c-.722 1.251.18 2.815 1.626 2.815h9.617M6.19 18.996h6.023m25.05-1.222H42.5"></svg:path><svg:circle cx="16.49" cy="12.057" r="3.535" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPixWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
