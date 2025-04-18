import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBaseballHelmetThinIcon],svg[ph-baseball-helmet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 132a24 24 0 1 0 24 24a24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16m160-48h-28.08A100 100 0 0 0 20 128v24a68.07 68.07 0 0 0 68 68h40a68.07 68.07 0 0 0 68-68v-20h52a4 4 0 0 0 0-8m-60 28a60.07 60.07 0 0 1-60 60h-8a68.07 68.07 0 0 0 36-60v-20h32Zm-36-28a4 4 0 0 0-4 4v24a60 60 0 0 1-120 0v-24a92 92 0 0 1 183.91-4Z"></svg:path>`,
})
export class PhBaseballHelmetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
