import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingButWallpapersIcon],svg[arcticons-nothing-but-wallpapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45 23.723c0 11.598-9.402 21-21 21s-21-9.403-21-21zm-6.183 0l-6.9-8.417l-6.901 8.417"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.586 20.587L19.521 8.822L9.306 23.723"></svg:path><svg:circle cx="34.192" cy="6.719" r="3.441" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNothingButWallpapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
