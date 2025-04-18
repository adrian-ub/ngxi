import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBriefcaseOffIcon],svg[tabler-briefcase-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m1.185-2.842A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2m-4 5v.01"></svg:path><svg:path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBriefcaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
