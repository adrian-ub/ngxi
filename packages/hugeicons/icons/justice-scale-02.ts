import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJusticeScale02Icon],svg[hugeicons-justice-scale-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m21 17l-3-7l-3 7m-6 0l-3-7l-3 7m1-7h1.048c1.264 0 2.49-.705 3.476-2c2.032-2.667 4.92-2.667 6.952 0c.986 1.295 2.212 2 3.476 2H20m-2 12c1.56 0 2.918-1.052 3.618-2.603c.353-.78.529-1.171.23-1.784S21.052 17 20.06 17h-4.122c-.992 0-1.487 0-1.787.613s-.123 1.003.23 1.784C15.082 20.948 16.44 22 18 22M6 22c1.56 0 2.918-1.052 3.618-2.603c.353-.78.529-1.171.23-1.784S9.053 17 8.06 17H3.939c-.992 0-1.487 0-1.787.613s-.123 1.003.23 1.784C3.082 20.948 4.44 22 6 22"></svg:path><svg:path d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsJusticeScale02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
