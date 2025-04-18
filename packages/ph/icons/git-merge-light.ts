import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitMergeLightIcon],svg[ph-git-merge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114a30 30 0 0 0-29.21 23.19l-44-6.28a10 10 0 0 1-6.18-3.39L91.18 83.83A30 30 0 1 0 74 85.4v85.2a30 30 0 1 0 12 0V96.22l33.52 39.11a22 22 0 0 0 13.6 7.46l45.35 6.48A30 30 0 1 0 208 114M62 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 144a18 18 0 1 1-18-18a18 18 0 0 1 18 18m110-38a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitMergeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
