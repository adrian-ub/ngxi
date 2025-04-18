import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTagSolidIcon],svg[bubbles-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.65 9.059L7.264.667A2.62 2.62 0 0 0 5.655 0H1.333A1.333 1.333 0 0 0 0 1.333l.005 4.324c.022.599.258 1.17.666 1.608l8.386 8.386a1.12 1.12 0 0 0 .786.349q.12 0 .236-.03a1.07 1.07 0 0 0 .752-.762l.969-3.184a.33.33 0 0 1 .221-.221l3.183-.972a1.027 1.027 0 0 0 .444-1.772zM3.996 4.995a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BubblesTagSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
