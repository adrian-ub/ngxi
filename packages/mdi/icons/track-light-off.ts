import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrackLightOffIcon],svg[mdi-track-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.78 13.57l2.77 1.15l-.76 1.85L19 15.42zm2.79-5.43l-.76-1.85l-2.31.96l.76 1.85zm-8.23 11.55L15.3 22l1.85-.77l-.96-2.3zM2.39 1.73L1.11 3l2.53 2.53l-2.21 5.31l5.54 2.3l4.97 3.68l1.85.77l.56-1.35l6.49 6.49l1.27-1.27zM6.2 3L6 2.8V1h8v2h-3v3.87l4.77.71l1.85.77l-1.78 4.29L9 5.8V3z"></svg:path>`,
})
export class MdiTrackLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
