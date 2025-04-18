import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMessagesBubbleSquareOutlineIcon],svg[bubbles-messages-bubble-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.038.505a1.36 1.36 0 0 0-1.035 1.047c-.02.106-.023.712-.02 5.08l.005 4.96l.038.112c.156.464.48.785.933.923c.113.034.146.036.989.044l.872.009l.008 1.288l.008 1.288l.036.058a.44.44 0 0 0 .188.176c.086.04.254.04.329.001c.03-.015.892-.656 1.915-1.423l1.86-1.396l3.38-.004l3.38-.004l.117-.036a1.39 1.39 0 0 0 .933-.924l.038-.112l.004-4.96c.004-4.368.002-4.974-.02-5.08A1.36 1.36 0 0 0 14.955.504C14.85.483 14.078.48 8.489.481C3.14.482 2.124.486 2.038.505m.093.812a.52.52 0 0 0-.254.198c-.106.16-.098-.276-.093 5.085l.004 4.864l.042.088a.6.6 0 0 0 .27.27l.088.042l1.072.008c1.196.009 1.125.002 1.245.123c.121.12.115.048.12 1.249l.004 1.076L6.2 13.14c.865-.648 1.604-1.197 1.644-1.22l.072-.04l3.448-.008l3.448-.008l.088-.042a.6.6 0 0 0 .27-.27l.042-.088V1.688l-.042-.09a.57.57 0 0 0-.268-.268l-.09-.042l-6.296-.004l-6.296-.003z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesMessagesBubbleSquareOutlineIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
