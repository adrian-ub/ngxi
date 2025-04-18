import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPlansIcon],svg[gridicons-plans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1 12H6l5-10zm2 6V10h5z"></svg:path>`,
})
export class GridiconsPlansIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
