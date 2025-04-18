import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImageSearchIcon],svg[tdesign-image-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v9h-2V4H4v9.586l5-5l3.914 3.914l-1.414 1.414l-2.5-2.5l-5 5V20h7v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m5.107 6.5a3.154 3.154 0 1 0 0 6.308a3.154 3.154 0 0 0 0-6.308M12.5 17.654a5.154 5.154 0 1 1 9.437 2.867l1.977 1.98l-1.415 1.413l-1.976-1.978a5.154 5.154 0 0 1-8.023-4.282"></svg:path>`,
})
export class TdesignImageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
