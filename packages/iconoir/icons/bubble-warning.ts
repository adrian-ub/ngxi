import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBubbleWarningIcon],svg[iconoir-bubble-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2v3m0 4.01l.01-.011M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10q0-.507-.05-1"></svg:path>`,
})
export class IconoirBubbleWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
