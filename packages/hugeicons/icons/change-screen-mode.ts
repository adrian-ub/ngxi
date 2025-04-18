import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChangeScreenModeIcon],svg[hugeicons-change-screen-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 2h-4c-2.828 0-4.243 0-5.121.946C6 3.893 6 5.416 6 8.462v1.076c0 3.047 0 4.57.879 5.516C7.757 16 9.172 16 12 16h4c2.828 0 4.243 0 5.121-.946c.879-.947.879-2.47.879-5.516V8.462c0-3.046 0-4.57-.879-5.516C20.243 2 18.828 2 16 2"></svg:path><svg:path d="M18 16.608c-.012 2.346-.109 3.616-.877 4.444c-.879.948-2.293.948-5.122.948h-4c-2.83 0-4.243 0-5.122-.948C2 20.106 2 18.58 2 15.53v-1.078c0-3.05 0-4.576.879-5.523C3.52 8.237 4.447 8.05 6 8"></svg:path></svg:g>`,
})
export class HugeiconsChangeScreenModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
