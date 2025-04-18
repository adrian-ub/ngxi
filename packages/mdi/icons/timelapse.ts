import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimelapseIcon],svg[mdi-timelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.24 5.76A5.95 5.95 0 0 0 12 6v6l-4.24 4.24a6 6 0 0 0 8.48 0a5.98 5.98 0 0 0 0-8.48"></svg:path>`,
})
export class MdiTimelapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
