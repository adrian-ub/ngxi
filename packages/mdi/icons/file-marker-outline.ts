import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileMarkerOutlineIcon],svg[mdi-file-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.55 20c.45.76.95 1.44 1.36 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v2.22c-.5-.14-1-.22-1.5-.22c-.17 0-.33 0-.5.03V9h-5V4H6v16zM22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiFileMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
