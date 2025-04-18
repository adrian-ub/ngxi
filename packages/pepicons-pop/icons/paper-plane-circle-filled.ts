import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPaperPlaneCircleFilledIcon],svg[pepicons-pop-paper-plane-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPaperPlaneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M4.685 9.659c-.926.309-.906 1.626.03 1.906l7.493 2.242l2.447 7.71c.293.922 1.596.932 1.902.013L21.86 5.62a1 1 0 0 0-1.265-1.265zm3.633.897l11.012-3.67l-3.698 11.096l-1.677-5.284a1 1 0 0 0-.667-.655z" clip-rule="evenodd"></svg:path><svg:path d="m20.767 4.44l1.044 1.077l-8.828 8.543l-1.044-1.077z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPaperPlaneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPaperPlaneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
