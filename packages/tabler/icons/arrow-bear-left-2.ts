import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBearLeft2Icon],svg[tabler-arrow-bear-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 3H4v5"></svg:path><svg:path d="m4 3l7.536 7.536A5 5 0 0 1 13 14.07V21m7-16l-4.5 4.5"></svg:path></svg:g>`,
})
export class TablerArrowBearLeft2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
