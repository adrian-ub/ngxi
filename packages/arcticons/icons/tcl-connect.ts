import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTclConnectIcon],svg[arcticons-tcl-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.492 19.209v9.584h4.738m-24.46-9.584h6.278m-3.139 9.584v-9.584m13 6.369v.04c0 1.753-1.405 3.174-3.139 3.174s-3.139-1.421-3.139-3.175v-3.234c0-1.754 1.405-3.175 3.139-3.175s3.139 1.421 3.139 3.175v.039M9.015 39.421a1.5 1.5 0 1 1 2.122-2.121M24 5.5a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class ArcticonsTclConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
