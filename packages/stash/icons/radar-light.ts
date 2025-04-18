import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashRadarLightIcon],svg[stash-radar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 0 0-1.861 14.767a2 2 0 0 1 3.723 0A7.5 7.5 0 0 0 19.5 12a.5.5 0 0 1 1 0a8.5 8.5 0 0 1-6.518 8.267a2 2 0 0 1-3.964 0a8.5 8.5 0 1 1 5.17-16.15a.5.5 0 1 1-.376.928A7.5 7.5 0 0 0 12 4.5M12 19a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M6.874 10.004a2 2 0 0 0 0 3.992A5.502 5.502 0 0 0 17.5 12a.5.5 0 0 0-1 0a4.5 4.5 0 0 1-8.626 1.8a2 2 0 0 0 0-3.6A4.5 4.5 0 0 1 13.8 7.875a.5.5 0 0 0 .4-.916a5.5 5.5 0 0 0-7.327 3.046M6 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" d="M14 12a2 2 0 1 1-.984-1.723l5.13-5.13a.5.5 0 0 1 .708.707l-5.13 5.13A2 2 0 0 1 14 12"></svg:path>`,
})
export class StashRadarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
