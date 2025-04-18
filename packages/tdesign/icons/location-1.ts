import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLocation1Icon],svg[tdesign-location-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7 6a5 5 0 1 1 6 4.9V17h-2v-6.1A5 5 0 0 1 7 6m-3.895 5H8v2H4.895l-.778 7h15.766l-.778-7H16v-2h4.895l1.222 11H1.883z"></svg:path>`,
})
export class TdesignLocation1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
