import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxisZRotateCounterclockwiseIcon],svg[mdi-axis-z-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12l4 4l-4 4v-3.1c-4.56-.46-8-2.48-8-4.9s3.44-4.44 8-4.9v1.99C6.55 9.43 4 10.6 4 12s2.55 2.57 6 2.91zm10 0c0-1.4-2.55-2.57-6-2.91V7.1c4.56.46 8 2.48 8 4.9c0 2.16-2.74 4-6.58 4.7l.7-.7l-1.2-1.21C17.89 14.36 20 13.27 20 12M11 2h2v11l-2-2zm0 20v-1l2-2v3z"></svg:path>`,
})
export class MdiAxisZRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
