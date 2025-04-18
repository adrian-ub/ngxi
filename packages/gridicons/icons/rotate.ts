import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsRotateIcon],svg[gridicons-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M13.914 2.914L11.828 5H14a8 8 0 0 1 8 8h-2c0-3.308-2.692-6-6-6h-2.172l2.086 2.086L12.5 10.5L8 6l1.414-1.414L12.5 1.5z"></svg:path>`,
})
export class GridiconsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
