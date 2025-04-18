import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowLeftRightIcon],svg[tabler-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 13l4-4l-4-4M7 13L3 9l4-4"></svg:path><svg:path d="M12 14a5 5 0 0 1 5-5h4m-9 10v-5a5 5 0 0 0-5-5H3"></svg:path></svg:g>`,
})
export class TablerArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
