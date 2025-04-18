import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCircleExpandIcon],svg[mdi-circle-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l4 4V4m0 12l-4 4h4M8 20l-4-4v4M4 8l4-4H4m12.95 3.05a7.007 7.007 0 0 0-9.9 0a7.007 7.007 0 0 0 0 9.9a7.007 7.007 0 0 0 9.9 0c2.73-2.73 2.73-7.16 0-9.9m-1.1 8.8a5.4 5.4 0 0 1-7.7 0a5.4 5.4 0 0 1 0-7.7a5.4 5.4 0 0 1 7.7 0a5.4 5.4 0 0 1 0 7.7"></svg:path>`,
})
export class MdiCircleExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
