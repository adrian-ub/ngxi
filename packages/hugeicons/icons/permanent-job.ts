import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPermanentJobIcon],svg[hugeicons-permanent-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 9h-1m5 0h-1m-3-3h-1m5 0h-1m9 9h-1m1-4h-1M14 8v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8zm0 0c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m6.025 3.955a2 2 0 1 1-3.999-.002a2 2 0 0 1 3.999.002M2.07 20.21c1.058-1.628 2.739-2.238 3.955-2.237s2.847.609 3.906 2.237c.068.105.087.235.025.344c-.247.439-1.016 1.31-1.57 1.368c-.639.068-2.307.078-2.36.078s-1.773-.01-2.41-.078c-.556-.059-1.324-.929-1.572-1.368a.33.33 0 0 1 .026-.344" color="currentColor"></svg:path>`,
})
export class HugeiconsPermanentJobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
