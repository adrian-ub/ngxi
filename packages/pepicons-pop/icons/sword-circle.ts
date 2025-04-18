import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSwordCircleIcon],svg[pepicons-pop-sword-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19.418 4.209a2 2 0 0 1 2.333 2.325l-.474 2.601a2 2 0 0 1-.551 1.053l-6.394 6.418a2 2 0 0 1-2.828.005l-2.126-2.117a2 2 0 0 1-.005-2.829l6.394-6.418a2 2 0 0 1 1.05-.554zm-.109 4.567l.475-2.601l-2.6.484l-6.394 6.418l2.125 2.117z"></svg:path><svg:path d="M10.97 15.021a.75.75 0 0 1-.002-1.06l3.53-3.543a.75.75 0 1 1 1.062 1.059l-3.529 3.542a.75.75 0 0 1-1.06.002"></svg:path><svg:path d="M6.192 12.025a2.5 2.5 0 0 1 3.535-.007l4.25 4.235a2.5 2.5 0 1 1-3.528 3.542l-4.25-4.235a2.5 2.5 0 0 1-.007-3.535m2.124 1.41a.5.5 0 0 0-.706.708l4.25 4.235a.5.5 0 1 0 .706-.708z"></svg:path><svg:path d="M8.71 16.646L5.889 19.48l.708.706l2.823-2.834l1.417 1.412l-2.823 2.833a2 2 0 0 1-2.829.006l-.708-.706a2 2 0 0 1-.005-2.829l2.823-2.833z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopSwordCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
