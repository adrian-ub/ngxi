import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMicrochipFIcon],svg[jam-microchip-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.858v2a1 1 0 0 1-2 0v-2H7v2a1 1 0 0 1-2 0v-2q0-.085.014-.166a3 3 0 0 1-1.848-1.848a1 1 0 0 1-.166.014H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 0 1 0-2h2v-2H1a1 1 0 1 1 0-2h2q.085 0 .166.014c.3-.864.984-1.548 1.848-1.848A1 1 0 0 1 5 3.858v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 1 1 2 0v2h2v-2a1 1 0 0 1 2 0v2q0 .084-.014.166c.864.3 1.548.984 1.848 1.848A1 1 0 0 1 17 5.858h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2q-.085 0-.166-.014a3 3 0 0 1-1.848 1.848q.014.081.014.166v2a1 1 0 0 1-2 0v-2zm-3-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class JamMicrochipFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
