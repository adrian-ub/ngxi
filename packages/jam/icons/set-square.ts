import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSetSquareIcon],svg[jam-set-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.413.646l15.97 15.938A2 2 0 0 1 17.972 20H2a2 2 0 0 1-2-2V2.061A2 2 0 0 1 3.413.646M2 2.06V18h15.97zm2 7.353a1 1 0 0 1 1.707-.707l5.586 5.586A1 1 0 0 1 10.586 16H5a1 1 0 0 1-1-1zM6 14h2l-2-2zm7 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-8 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamSetSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
