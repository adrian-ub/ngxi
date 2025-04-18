import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleChevronLeftFilledIcon],svg[tabler-circle-chevron-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 15-8.66m-3.293 4.953a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L11.415 12l2.292-2.293a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class TablerCircleChevronLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
