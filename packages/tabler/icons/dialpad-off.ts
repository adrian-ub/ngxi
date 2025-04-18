import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDialpadOffIcon],svg[tabler-dialpad-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7H3V3m14 0h4v4h-4zm-7 3V3h4v4h-3m-8 3h4v4H3zm14 3v-3h4v4h-3m-4 0h-4v-4m0 7h4v4h-4zM3 3l18 18"></svg:path>`,
})
export class TablerDialpadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
