import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceDizzyIcon],svg[arcticons-emoji-face-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.612 20.984l-5.228-5.229M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54m9.572-26.745l-5.228 5.229m-8.687 0l-5.229-5.229m5.229 0l-5.229 5.229"></svg:path><svg:circle cx="24.04" cy="31.038" r="4.223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceDizzyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
