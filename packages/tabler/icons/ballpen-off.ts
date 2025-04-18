import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallpenOffIcon],svg[tabler-ballpen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 6l7 7l-2 2m-9-5l-4.172 4.172a2.828 2.828 0 1 0 4 4L14 14"></svg:path><svg:path d="m16 12l4.414-4.414a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBallpenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
