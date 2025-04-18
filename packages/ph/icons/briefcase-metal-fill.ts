import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseMetalFillIcon],svg[ph-briefcase-metal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 112h200a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4m-4 88a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-20a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4ZM232 72v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16m-72-24a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v8h64Z"></svg:path>`,
})
export class PhBriefcaseMetalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
