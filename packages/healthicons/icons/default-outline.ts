import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDefaultOutlineIcon],svg[healthicons-default-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10 10a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14.055a9 9 0 0 1 2 .457V10a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h11.516a9 9 0 0 1-1.004-2H12a2 2 0 0 1-2-2z"></svg:path><svg:path d="M12 14a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m19 11a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path d="M34.997 29.028a1 1 0 0 0-1.414 0l-.79.79l1.413 1.415l.791-.791a1 1 0 0 0 0-1.414M33.5 31.94l-1.414-1.414l-5.069 5.069v1.414h1.414z"></svg:path></svg:g>`,
})
export class HealthiconsDefaultOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
