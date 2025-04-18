import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingLeft06Icon],svg[hugeicons-pointing-left-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4.5h5.998M2 4.5C2 3.8 3.994 2.492 4.5 2M2 4.5C2 5.2 3.994 6.508 4.5 7m6.575 6.005H7.972m0 0H3.504a1.503 1.503 0 1 1 0-3.003h5.463m-.995 3.003L8 14.06a2 2 0 0 0 .978 1.668m-.01-5.726h4.561m-4.561 0l2.759-2.594c1.867-1.572 3.228-.746 3.984-.165l3.973 2.88a2 2 0 0 0 1.173.38h1.133M11.005 16.01h-1.004a2 2 0 0 1-1.024-.281m0 0l.054 1.335c.017.675.367 1.264.89 1.613m2.117.337h-1.004c-.411 0-.794-.124-1.112-.337m0 0l.269 1.591c.135 1 .993 1.742 2.003 1.733h3.548c.604 0 1.21-.049 1.784-.238c.478-.157 1.004-.377 1.347-.647c.74-.582 1.003-.99 1.639-1.095c.508-.085 1.145-.097 1.489-.097" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingLeft06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
