import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAvocadoBoldIcon],svg[ph-avocado-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 108a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28m86.76-58.68L185 45.17A60 60 0 0 0 71.42 44l-29.5 83.46a92 92 0 1 0 172.84 1.86M128 228a68.05 68.05 0 0 1-63.59-92.15c0-.09.07-.18.1-.26L94.05 52a36 36 0 0 1 68.17.78l.09.27l29.82 84.28A68 68 0 0 1 128 228"></svg:path>`,
})
export class PhAvocadoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
