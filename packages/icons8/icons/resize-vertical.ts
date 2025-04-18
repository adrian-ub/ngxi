import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ResizeVerticalIcon],svg[icons8-resize-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.094l-.72.687l-8 8l1.44 1.44L15 5.936v20.125l-6.28-6.28l-1.44 1.437l8 8l.72.686l.72-.687l8-8l-1.44-1.44L17 26.063V5.938l6.28 6.282l1.44-1.44l-8-8z"></svg:path>`,
})
export class Icons8ResizeVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
