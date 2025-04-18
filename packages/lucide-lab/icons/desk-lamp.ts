import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabDeskLampIcon],svg[lucide-lab-desk-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 7l1-2m-3 2h4v4h-4zM6 7v4m3-4H3l1-5h4Zm13 15V12c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v10m8-7H2m8-4v8m12 0H2"></svg:path>`,
})
export class LucideLabDeskLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
