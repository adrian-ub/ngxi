import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFinanceDeptIcon],svg[healthicons-finance-dept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm8 4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M17 12h14v9H17zm4.273 12.636a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0m4.363 0a1.636 1.636 0 1 1-3.272 0a1.636 1.636 0 0 1 3.272 0m4.364 0a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0M21.273 29A1.636 1.636 0 1 1 18 29a1.636 1.636 0 0 1 3.273 0m4.363 0a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0M30 29a1.636 1.636 0 1 1-3.273 0A1.636 1.636 0 0 1 30 29m0 4.364a1.636 1.636 0 1 1-3.273 0a1.636 1.636 0 0 1 3.273 0m-12 0c0-.904.733-1.637 1.636-1.637H24A1.636 1.636 0 1 1 24 35h-4.364A1.636 1.636 0 0 1 18 33.364"></svg:path></svg:g>`,
})
export class HealthiconsFinanceDeptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
