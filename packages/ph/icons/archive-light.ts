import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArchiveLightIcon],svg[ph-archive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h2v90a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-90h2a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m-14 142a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-90h164Zm16-104a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM98 136a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhArchiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
