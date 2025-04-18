import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDisabled2Icon],svg[tabler-disabled-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6 5a5 5 0 1 0 3.95 7.95"></svg:path><svg:path d="m19 20l-4-5h-4l3-5l-4-3l-4 1"></svg:path></svg:g>`,
})
export class TablerDisabled2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
