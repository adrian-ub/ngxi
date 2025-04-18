import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHouse04Icon],svg[hugeicons-house-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 9l4.77-4.265C13.066 3.578 13.713 3 14.5 3s1.435.578 2.73 1.735L22 9M8.5 8v12m12 0V8"></svg:path><svg:ellipse cx="3.5" cy="12" rx="1.5" ry="2"></svg:ellipse><svg:path d="M3.5 14v6M2 20h20m-10 0v-4c0-.943 0-1.414.293-1.707S13.057 14 14 14h1c.943 0 1.414 0 1.707.293S17 15.057 17 16v4m-3.5-9h2m-2-3h2"></svg:path></svg:g>`,
})
export class HugeiconsHouse04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
