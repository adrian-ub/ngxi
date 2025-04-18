import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCreativeCommonsByIcon],svg[tabler-creative-commons-by-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M11 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-2 6v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.5l-.5 4h-2l-.5-4H10a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class TablerCreativeCommonsByIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
