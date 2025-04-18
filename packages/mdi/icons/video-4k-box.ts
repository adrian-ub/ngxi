import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideo4kBoxIcon],svg[mdi-video-4k-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 10.5h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zm6 1.5h-1.8l-1.8-2.2V15H13V9h1.5v2.2L16.2 9H18l-2.2 3z"></svg:path>`,
})
export class MdiVideo4kBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
