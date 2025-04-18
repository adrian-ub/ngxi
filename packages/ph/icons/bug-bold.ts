import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBugBoldIcon],svg[ph-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-40-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m120 72a91.8 91.8 0 0 1-2.34 20.64l19.15 8.36a12 12 0 0 1-9.62 22l-18-7.85a92 92 0 0 1-162.46 0l-18 7.85a12 12 0 1 1-9.62-22l19.15-8.36A91.8 91.8 0 0 1 36 144v-4H16a12 12 0 0 1 0-24h20v-4a91.8 91.8 0 0 1 2.34-20.64L19.19 83a12 12 0 0 1 9.62-22l18 7.85a92 92 0 0 1 162.46 0l18-7.85a12 12 0 1 1 9.62 22l-19.15 8.36A91.8 91.8 0 0 1 220 112v4h20a12 12 0 0 1 0 24h-20ZM60 116h136v-4a68 68 0 0 0-136 0Zm56 94.92V140H60v4a68.1 68.1 0 0 0 56 66.92M196 144v-4h-56v70.92A68.1 68.1 0 0 0 196 144"></svg:path>`,
})
export class PhBugBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
