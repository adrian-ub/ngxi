import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidPagerIcon],svg[fa-solid-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64M160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z"></svg:path>`,
})
export class FaSolidPagerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
