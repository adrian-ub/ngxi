import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilPowerButtonOutlineIcon],svg[basil-power-button-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8.082c0-.183-.19-.302-.348-.212a4.75 4.75 0 1 0 4.696 0c-.159-.09-.348.03-.348.212v1.234c0 .077.036.15.095.199a3.25 3.25 0 1 1-4.19 0A.26.26 0 0 0 10 9.316z"></svg:path><svg:path fill="currentColor" d="M12.75 7a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5" clip-rule="evenodd"></svg:path>`,
})
export class BasilPowerButtonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
