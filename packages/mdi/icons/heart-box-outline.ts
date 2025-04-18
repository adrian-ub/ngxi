import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeartBoxOutlineIcon],svg[mdi-heart-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-.72-.66C8.7 14 7 12.46 7 10.57c0-1.54 1.21-2.75 2.75-2.75c.87 0 1.7.41 2.25 1.05c.55-.64 1.38-1.05 2.25-1.05c1.54 0 2.75 1.21 2.75 2.75c0 1.89-1.7 3.43-4.28 5.77zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiHeartBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
