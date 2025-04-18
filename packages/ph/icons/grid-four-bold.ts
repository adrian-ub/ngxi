import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGridFourBoldIcon],svg[ph-grid-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-80-56v56H60V60Zm-56 80h56v56H60Zm80 56v-56h56v56Z"></svg:path>`,
})
export class PhGridFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
