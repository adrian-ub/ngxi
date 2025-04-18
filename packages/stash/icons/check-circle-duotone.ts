import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleDuotoneIcon],svg[stash-check-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L11 12.94l3.47-3.47a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 19.25a7.25 7.25 0 1 1 0-14.5a7.25 7.25 0 0 1 0 14.5M3.25 12a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0"></svg:path>`,
})
export class StashCheckCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
