import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceConfusedIcon],svg[arcticons-emoji-face-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.998 29.638c-5.09-1.397-9.178-.729-13.996 1.53m2.172-11.922a2.414 2.414 0 0 1-4.826 0a2.414 2.414 0 0 1 4.826 0m14.478 0a2.414 2.414 0 0 1-4.826 0c0-1.332 1.082-2.413 2.413-2.413s2.413 1.081 2.413 2.413"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceConfusedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
