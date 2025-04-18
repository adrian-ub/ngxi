import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormFileAttachOutlineIcon],svg[bubbles-form-file-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.811 19.782v-5.4a1.422 1.422 0 0 1 2.844 0v6.278a2.844 2.844 0 1 1-5.689 0v-6.893a4.267 4.267 0 0 1 8.534 0v6.015"></svg:path><svg:path d="M12 20H2a1.5 1.5 0 0 1-1.5-1.5V2A1.5 1.5 0 0 1 2 .5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872A1.5 1.5 0 0 1 17 4.871V7"></svg:path></svg:g>`,
})
export class BubblesFormFileAttachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
