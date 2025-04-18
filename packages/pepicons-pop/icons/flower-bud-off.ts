import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFlowerBudOffIcon],svg[pepicons-pop-flower-bud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.49 13.714a4.003 4.003 0 0 0 0-7.427q.01-.143.01-.287A4 4 0 0 0 10 2.877a4 4 0 0 0-6.49 3.41a4.003 4.003 0 0 0 0 7.427q-.01.142-.01.286a4 4 0 0 0 6.5 3.123a4 4 0 0 0 6.49-3.41m-2.108-7.036a1 1 0 0 0 .835 1.334a2 2 0 0 1 0 3.976a1 1 0 0 0-.835 1.334q.117.324.118.678a2 2 0 0 1-3.667 1.105a1 1 0 0 0-1.666 0a2 2 0 0 1-3.55-1.783a1 1 0 0 0-.834-1.333a2 2 0 0 1 0-3.977a1 1 0 0 0 .835-1.334a2 2 0 0 1 3.55-1.783a1 1 0 0 0 1.665 0a2 2 0 0 1 3.55 1.783" clip-rule="evenodd"></svg:path><svg:path d="M13.5 10a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFlowerBudOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
