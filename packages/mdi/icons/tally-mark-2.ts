import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark2Icon],svg[mdi-tally-mark-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19H9V5h2zm4-14h-2v14h2z"></svg:path>`,
})
export class MdiTallyMark2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
