import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle7FilledIcon],svg[tdesign-castle-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.083c2.838.476 5 2.944 5 5.917H6a6 6 0 0 1 5-5.917V1zm9 7H2v4.836A4.64 4.64 0 0 1 4.667 12c1.487 0 2.812.696 3.666 1.78A4.66 4.66 0 0 1 12 12a4.66 4.66 0 0 1 3.667 1.78A4.66 4.66 0 0 1 19.333 12c.992 0 1.911.31 2.667.836zm0 8.663a2.667 2.667 0 0 0-5.333.004V22H22zM14.667 22v-5.333a2.667 2.667 0 1 0-5.334 0V22zm-7.334 0v-5.333a2.667 2.667 0 1 0-5.333 0V22z"></svg:path>`,
})
export class TdesignCastle7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
