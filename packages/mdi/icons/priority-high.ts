import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPriorityHighIcon],svg[mdi-priority-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h8v-2h-8zm0-5.5h8v-2h-8zM14 8h8V6h-8zM2 12.5C2 8.92 4.92 6 8.5 6H9V4l3 3l-3 3V8h-.5C6 8 4 10 4 12.5S6 17 8.5 17H12v2H8.5C4.92 19 2 16.08 2 12.5"></svg:path>`,
})
export class MdiPriorityHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
