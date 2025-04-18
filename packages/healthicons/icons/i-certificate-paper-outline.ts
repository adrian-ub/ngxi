import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsICertificatePaperOutlineIcon],svg[healthicons-i-certificate-paper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1m-3 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M38 36a4 4 0 0 1-4 4h-3v4l-3-1.5l-3 1.5v-4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4zM14 6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h11v-2.354a4 4 0 1 1 6 0V38h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm15 30.874a4 4 0 0 1-2 0v3.89l1-.5l1 .5zM28 35a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsICertificatePaperOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
