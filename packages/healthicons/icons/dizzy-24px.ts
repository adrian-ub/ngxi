import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDizzy24pxIcon],svg[healthicons-dizzy-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path d="M7.63 16.174c0-1.107.46-2.169 1.28-2.951A4.48 4.48 0 0 1 12 12c1.159 0 2.27.44 3.09 1.223a4.08 4.08 0 0 1 1.28 2.951c0 1.108-2.663 1.586-4.37 1.586s-4.37-.478-4.37-1.586m1.097-7.971l-.993-.993l-1.06 1.06l.993.994l-.993.992l1.06 1.061l.993-.993l.993.993l1.06-1.06l-.992-.993l.993-.993L9.72 7.21zm6.75 0l.992-.993l1.061 1.06l-.993.994l.993.992l-1.06 1.06l-.993-.992l-.993.993l-1.06-1.06l.992-.993l-.993-.993l1.06-1.061z"></svg:path></svg:g>`,
})
export class HealthiconsDizzy24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
