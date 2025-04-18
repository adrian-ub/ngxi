import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feKeyIcon],svg[fe-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 11H22v4.004c0 .546-.45.996-1 .996s-1-.45-1-.996V13h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-4.1A5.002 5.002 0 0 1 2 12a5 5 0 0 1 9.9-1M7 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class FeKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
