import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCat1Icon],svg[streamline-cat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-4.5 6.46a4 4 0 0 0 1.5.29h2a4 4 0 0 0 1.5-.29M2 7.5v-7l4.153 3.056M12 7.5v-7L7.86 3.556"></svg:path><svg:path d="M4.019 4.5c.732-.614 1.796-1 2.981-1s2.25.386 2.982 1M.5 9.5H4m0 2L1 13m9-3.5h3.5m-3.5 2l3 1.5M7.75 9.5h-1.5L7 10z"></svg:path></svg:g>`,
})
export class StreamlineCat1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
