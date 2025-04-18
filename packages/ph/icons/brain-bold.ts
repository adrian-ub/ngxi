import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrainBoldIcon],svg[ph-brain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 124a60.14 60.14 0 0 0-32-53.08a52 52 0 0 0-92-32.11a52 52 0 0 0-92 32.11a60 60 0 0 0 0 106.14a52 52 0 0 0 92 32.13a52 52 0 0 0 92-32.13A60.05 60.05 0 0 0 252 124M88 204a28 28 0 0 1-26.85-20.07c1 0 1.89.07 2.85.07h8a12 12 0 0 0 0-24h-8a36 36 0 0 1-12-69.95a12 12 0 0 0 8-11.32V72a28 28 0 0 1 56 0v60.18a51.6 51.6 0 0 0-7.2-3.85a12 12 0 1 0-9.6 22A28 28 0 0 1 88 204m104-44h-8a12 12 0 0 0 0 24h8c1 0 1.9 0 2.85-.07a28 28 0 1 1-38-33.61a12 12 0 1 0-9.6-22a51.6 51.6 0 0 0-7.2 3.85V72a28 28 0 0 1 56 0v6.73a12 12 0 0 0 8 11.32a36 36 0 0 1-12 70Zm16-44a12 12 0 0 1-12 12a40 40 0 0 1-40-40v-4a12 12 0 0 1 24 0v4a16 16 0 0 0 16 16a12 12 0 0 1 12 12M100 88a40 40 0 0 1-40 40a12 12 0 0 1 0-24a16 16 0 0 0 16-16v-4a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhBrainBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
