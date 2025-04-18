import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMoonFirstQuarterIcon],svg[mdi-moon-first-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v20a10 10 0 0 0 0-20"></svg:path>`,
})
export class MdiMoonFirstQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
