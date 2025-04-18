import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTableColAfterIcon],svg[jam-table-col-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2 2 0 0 1 2 2v1a1 1 0 0 1-2 0V2H6v10h6v-1a1 1 0 0 1 2 0v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM4 10H2v2h2zm6-6a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V8H8a1 1 0 1 1 0-2h1V5a1 1 0 0 1 1-1M4 6H2v2h2zm0-4H2v2h2z"></svg:path>`,
})
export class JamTableColAfterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
