import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBucketOffIcon],svg[tabler-bucket-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.029 5.036C4.374 5.616 4 6.286 4 7c0 2.033 3.033 3.712 6.96 3.967m3.788-.21C17.812 10.198 20 8.728 20 7c0-2.21-3.582-4-8-4c-1.605 0-3.1.236-4.352.643"></svg:path><svg:path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.15-.45.457-1.535m.862-3.146q.393-1.463 1.418-5.354A7.5 7.5 0 0 0 20 7M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBucketOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
