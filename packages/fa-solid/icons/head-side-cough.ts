import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidHeadSideCoughIcon],svg[fa-solid-head-side-cough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M616 304a24 24 0 1 0-24-24a24 24 0 0 0 24 24m-64 112a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-64-56a24 24 0 1 0 24 24a24 24 0 0 0-24-24m128 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0-104a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-64-40a24 24 0 1 0 24 24a24 24 0 0 0-24-24m-74.78-45c-21-47.12-48.5-151.75-73.12-186.75A208.13 208.13 0 0 0 234.1 0H192C86 0 0 86 0 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0 0 64-64h-96a32 32 0 0 1 0-64h96v-32h32a32 32 0 0 0 29.22-45M288 224a32 32 0 1 1 32-32a32.07 32.07 0 0 1-32 32"></svg:path>`,
})
export class FaSolidHeadSideCoughIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
