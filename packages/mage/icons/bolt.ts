import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBoltIcon],svg[mage-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.567 14.54V9.46a4.16 4.16 0 0 0-2.082-3.602l-4.403-2.55a4.16 4.16 0 0 0-4.164 0l-4.403 2.55A4.16 4.16 0 0 0 3.433 9.46v5.08a4.16 4.16 0 0 0 2.082 3.602l4.403 2.55a4.16 4.16 0 0 0 4.164 0l4.403-2.55a4.16 4.16 0 0 0 2.082-3.602"></svg:path><svg:path d="M12.906 8.346h-1.812a2.08 2.08 0 0 0-1.81 1.041l-.907 1.572a2.08 2.08 0 0 0 0 2.082l.906 1.572a2.08 2.08 0 0 0 1.811 1.04h1.812a2.08 2.08 0 0 0 1.81-1.04l.907-1.572a2.08 2.08 0 0 0 0-2.082l-.906-1.572a2.08 2.08 0 0 0-1.811-1.04"></svg:path></svg:g>`,
})
export class MageBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
