import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark1Icon],svg[mdi-tally-mark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h-2V5h2z"></svg:path>`,
})
export class MdiTallyMark1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
