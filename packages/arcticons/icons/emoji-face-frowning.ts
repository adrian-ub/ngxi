import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceFrowningIcon],svg[arcticons-emoji-face-frowning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.359 33.652c1.51-3.083 4.684-4.984 8.043-4.826c3.084.145 5.866 2.005 7.24 4.826M19.174 19.978a2.414 2.414 0 0 1-4.826 0c0-1.331 1.081-2.413 2.413-2.413s2.413 1.082 2.413 2.413m14.478 0a2.414 2.414 0 0 1-4.826 0c0-1.331 1.082-2.413 2.413-2.413s2.413 1.082 2.413 2.413"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceFrowningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
