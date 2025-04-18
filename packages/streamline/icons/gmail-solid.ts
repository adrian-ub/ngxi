import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGmailSolidIcon],svg[streamline-gmail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.086 6.787v4.349a.92.92 0 0 0 .922.918h2.765v-2.88zm8.976 1.74L7.043 9.834l-2.02-1.307v-4.94l2.02 1.296l2.02-1.296zm1.25.647v2.88h2.766a.92.92 0 0 0 .922-.918v-4.35l-3.687 2.388ZM14 5.33l-3.688 2.387V2.784l.848-.544c1.226-.785 2.84.092 2.84 1.546zM3.773 2.784v4.934L.086 5.33V3.786c0-1.454 1.614-2.331 2.84-1.546z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGmailSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
