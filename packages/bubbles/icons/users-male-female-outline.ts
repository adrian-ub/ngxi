import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUsersMaleFemaleOutlineIcon],svg[bubbles-users-male-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 12l.75 7.5h4.5l.75-7.5h2.25V13.5a5.25 5.25 0 0 0-9.75-2.7M9 23.25l.75-4.5h3L10.5 12c-.75-2.25-1.679-3.75-3.75-3.75S3.75 9.75 3 12L.75 18.75h3l.75 4.5zM3.75 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class BubblesUsersMaleFemaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
