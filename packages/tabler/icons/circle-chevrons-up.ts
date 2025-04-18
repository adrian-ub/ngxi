import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronsUpIcon],svg[tabler-circle-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9 15l3-3l3 3m-6-4l3-3l3 3"></svg:path><svg:path d="M12 21a9 9 0 1 0-.265 0z"></svg:path></svg:g>`,
})
export class TablerCircleChevronsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
