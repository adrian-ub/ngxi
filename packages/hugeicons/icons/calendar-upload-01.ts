import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarUpload01Icon],svg[hugeicons-calendar-upload-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 16.5c.492-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v8M18 2v2M6 2v2"></svg:path><svg:path d="M12.5 22h-1.45c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354c1.179 1.274 1.248 3.28 1.252 7.146M3 8h18"></svg:path></svg:g>`,
})
export class HugeiconsCalendarUpload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
