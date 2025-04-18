import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCloudDrizzleIcon],svg[feather-cloud-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 19v2m0-8v2m8 4v2m0-8v2m-4 6v2m0-8v2m8-.42A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></svg:path>`,
})
export class FeatherCloudDrizzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
