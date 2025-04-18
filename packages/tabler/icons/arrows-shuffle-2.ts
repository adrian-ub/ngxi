import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowsShuffle2Icon],svg[tabler-arrows-shuffle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 4l3 3l-3 3m0 10l3-3l-3-3"></svg:path><svg:path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5"></svg:path><svg:path d="M3 17h3a5 5 0 0 0 5-5a5 5 0 0 1 5-5h5"></svg:path></svg:g>`,
})
export class TablerArrowsShuffle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
