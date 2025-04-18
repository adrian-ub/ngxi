import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageSyncOutlineIcon],svg[mdi-image-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.18 19c.17.72.46 1.39.85 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v6.18c-.5-.11-1-.18-1.5-.18c-.17 0-.33 0-.5.03V5H5v14zm-1.97-3.17l-1.96-2.36L6.5 17h6.53c.11-1.46.7-2.78 1.61-3.81l-.68-.9zM19 13.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5z"></svg:path>`,
})
export class MdiImageSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
