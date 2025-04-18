import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGrinTongueWinkAltIcon],svg[uil-grin-tongue-wink-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.21 10.54a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m3-11a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4H9a1 1 0 0 0 0 2a3 3 0 0 0 6 0a1 1 0 0 0 0-2m-3 3a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilGrinTongueWinkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
