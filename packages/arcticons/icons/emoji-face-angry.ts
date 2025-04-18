import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceAngryIcon],svg[arcticons-emoji-face-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.175 21.527a2.413 2.413 0 0 1-4.825 0a2.414 2.414 0 0 1 4.825 0m14.475 0a2.413 2.413 0 0 1-4.825 0c0-1.33 1.081-2.412 2.412-2.412s2.413 1.081 2.413 2.412M18.773 29.63c1.033-.513 3.204-.83 5.502-.803c2.11.024 4.013.333 4.952.802M13.546 14.35l5.629 3.217m15.279-3.217l-5.629 3.217"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceAngryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
