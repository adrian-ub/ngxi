import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiPhone01Icon],svg[hugeicons-ai-phone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15c0 3.3 0 4.95-.952 5.975S13.564 22 10.5 22s-4.596 0-5.548-1.025S4 18.3 4 15V9c0-3.3 0-4.95.952-5.976c.85-.916 2.164-1.014 4.62-1.024"></svg:path><svg:path d="M16 4h-2c-.943 0-1.414 0-1.707.293S12 5.057 12 6v2c0 .943 0 1.414.293 1.707S13.057 10 14 10h2c.943 0 1.414 0 1.707-.293S18 8.943 18 8V6c0-.943 0-1.414-.293-1.707S16.943 4 16 4m-2.5 6v2m3-2v2m-3-10v2m3-2v2M12 5.5h-2m2 3h-2m10-3h-2m2 3h-2M10.49 19h.009"></svg:path></svg:g>`,
})
export class HugeiconsAiPhone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
