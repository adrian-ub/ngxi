import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCyborg2Icon],svg[streamline-cyborg-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.167 1.854a1.167 1.167 0 1 1-2.334 0a1.167 1.167 0 0 1 2.334 0M7 3.02v2.25m1.75 5.48s-.55.583-1.75.583s-1.75-.583-1.75-.583m-.208-2.209a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m3.916.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M1.5 11.313v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class StreamlineCyborg2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
