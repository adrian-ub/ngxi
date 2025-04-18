import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSteuerScanIcon],svg[arcticons-steuer-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 14.926V9.5a4 4 0 0 1 4-4h5.271m0 37H9.5a4 4 0 0 1-4-4v-5.426m37 0V38.5a4 4 0 0 1-4 4h-5.271m0-37H38.5a4 4 0 0 1 4 4v5.426m-29.928 1.359h23.253M12.572 23.91H26.33m-13.758 7.625H26.33m4.752 0h4.743"></svg:path>`,
})
export class ArcticonsSteuerScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
