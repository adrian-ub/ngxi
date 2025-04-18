import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWazeIcon],svg[hugeicons-waze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 9v.01m-7-.01v.01m0 3.99s1 2 3.5 2s3.5-2 3.5-2M11 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M11 19.945c.684.042 1.357.055 2 .055a9 9 0 1 0-9-9c0 1.039 0 3-2 4c1.058 2.38 2.974 3.64 5.126 4.3"></svg:path><svg:path d="M17 22a2 2 0 0 0 1.163-3.627c-.935.656-2 1.139-3.15 1.401A2 2 0 0 0 17 22"></svg:path></svg:g>`,
})
export class HugeiconsWazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
