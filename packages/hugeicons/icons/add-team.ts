import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAddTeamIcon],svg[hugeicons-add-team-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m1.5 3.5a3.5 3.5 0 1 0 0-7m-.357 16H3.857C2.831 20 2 19.233 2 18.286C2 15.919 4.079 14 6.643 14h3.714a4.9 4.9 0 0 1 2.786.857M19 14v6m3-3h-6" color="currentColor"></svg:path>`,
})
export class HugeiconsAddTeamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
