import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSwordOffIcon],svg[pepicons-pop-sword-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.418 1.209a2 2 0 0 1 2.333 2.325l-.474 2.601a2 2 0 0 1-.551 1.053l-6.394 6.418a2 2 0 0 1-2.828.005l-2.126-2.117a2 2 0 0 1-.005-2.829l6.394-6.418a2 2 0 0 1 1.05-.554zm-.109 4.567l.475-2.601l-2.6.484l-6.394 6.418l2.125 2.117z"></svg:path><svg:path d="M7.97 12.021a.75.75 0 0 1-.002-1.06l3.53-3.543a.75.75 0 1 1 1.062 1.059l-3.529 3.542a.75.75 0 0 1-1.06.002"></svg:path><svg:path d="M3.192 9.025a2.5 2.5 0 0 1 3.535-.007l4.25 4.235a2.5 2.5 0 1 1-3.528 3.542l-4.25-4.235a2.5 2.5 0 0 1-.007-3.535m2.124 1.41a.5.5 0 0 0-.706.708l4.25 4.235a.5.5 0 1 0 .706-.708z"></svg:path><svg:path d="M5.71 13.646L2.889 16.48l.708.706l2.823-2.834l1.417 1.412l-2.823 2.833a2 2 0 0 1-2.829.006l-.708-.706a2 2 0 0 1-.005-2.829l2.823-2.833z"></svg:path></svg:g><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopSwordOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
