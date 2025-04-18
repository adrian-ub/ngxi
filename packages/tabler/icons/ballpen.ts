import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallpenIcon],svg[tabler-ballpen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 6l7 7l-4 4"></svg:path><svg:path d="M5.828 18.172a2.83 2.83 0 0 0 4 0L20.414 7.586a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L5.828 14.172a2.83 2.83 0 0 0 0 4M4 20l1.768-1.768"></svg:path></svg:g>`,
})
export class TablerBallpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
