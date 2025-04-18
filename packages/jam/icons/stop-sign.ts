import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStopSignIcon],svg[jam-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.094 16.32A8 8 0 0 0 16.32 5.094zM3.68 14.906L14.906 3.68A8 8 0 0 0 3.68 14.906M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class JamStopSignIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
