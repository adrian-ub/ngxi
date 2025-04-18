import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerForbid2FilledIcon],svg[tabler-forbid-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 4.953a1 1 0 0 0-1.414 0l-6 6l-.083.094a1 1 0 0 0 1.497 1.32l6-6l.083-.094a1 1 0 0 0-.083-1.32"></svg:path>`,
})
export class TablerForbid2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
