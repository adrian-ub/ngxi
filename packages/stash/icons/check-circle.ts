import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleIcon],svg[stash-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 10.53a.75.75 0 1 0-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" d="M12 20.75a8.75 8.75 0 1 1 0-17.5a8.75 8.75 0 0 1 0 17.5M4.75 12a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 0 0-14.5 0"></svg:path>`,
})
export class StashCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
