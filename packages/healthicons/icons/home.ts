import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHomeIcon],svg[healthicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24.507 10.138a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16l17.355 10.21l1.014-1.724L36 16.9V12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.957z"></svg:path><svg:path fill-rule="evenodd" d="m24 14l-14 8v14H5a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22zm4 22V25h6v11zm-3-11H14v6h11z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
