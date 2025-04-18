import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracketsIcon],svg[mdi-application-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M11 17.5L9.5 19L5 14.5L9.5 10l1.5 1.5l-3 3zm3.5 1.5L13 17.5l3-3l-3-3l1.5-1.5l4.5 4.5zM21 7H3V4h18z"></svg:path>`,
})
export class MdiApplicationBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
