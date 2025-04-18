import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiBrain05Icon],svg[hugeicons-ai-brain-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 4.5a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893M7.5 4.5a2.5 2.5 0 0 1 5 0V6m-5-1.5c0 .818.393 1.544 1 2m-3.567 8.447A3 3 0 0 0 7.5 19.5a2.5 2.5 0 0 0 5-.001V18m-7.567-3.053A3 3 0 0 1 6.5 13.67M17.5 9h-2c-.943 0-1.414 0-1.707.293S13.5 10.057 13.5 11v2c0 .943 0 1.414.293 1.707S14.557 15 15.5 15h2c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-2c0-.943 0-1.414-.293-1.707S18.443 9 17.5 9M15 15v2m3-2v2M15 7v2m3-2v2m-4.5 1.5h-2m2 3h-2m10-3h-2m2 3h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsAiBrain05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
