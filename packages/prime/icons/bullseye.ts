import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeBullseyeIcon],svg[prime-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m9-4.375a4.375 4.375 0 1 0 0 8.75a4.375 4.375 0 0 0 0-8.75M6.125 12a5.875 5.875 0 1 1 11.75 0a5.875 5.875 0 0 1-11.75 0m4.625 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M12 9.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"></svg:path>`,
})
export class PrimeBullseyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
