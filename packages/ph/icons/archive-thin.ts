import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArchiveThinIcon],svg[ph-archive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h4v92a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-92h4a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-12 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-92h168Zm16-104a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Zm-128 48a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhArchiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
