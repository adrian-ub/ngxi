import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark3Icon],svg[mdi-tally-mark-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19H7V5h2zm4-14h-2v14h2zm4 0h-2v14h2z"></svg:path>`,
})
export class MdiTallyMark3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
