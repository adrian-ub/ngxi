import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashExclamationCircleDuotoneIcon],svg[stash-exclamation-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path>`,
})
export class StashExclamationCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
