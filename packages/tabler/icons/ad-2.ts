import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAd2Icon],svg[tabler-ad-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.933 5H5v16h13v-8m-4 4H9"></svg:path><svg:path d="M9 13h5V9H9zm6-8V3m3 3l2-2m-1 5h2"></svg:path></svg:g>`,
})
export class TablerAd2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
