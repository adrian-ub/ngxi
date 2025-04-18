import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDirectionsIcon],svg[proicons-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.507 14.007a2.84 2.84 0 0 1 0-4.014l6.486-6.486a2.84 2.84 0 0 1 4.014 0l6.486 6.486a2.84 2.84 0 0 1 0 4.014l-6.486 6.486a2.84 2.84 0 0 1-4.014 0z"></svg:path><svg:path d="m14.46 9.02l1.394 1.395a1 1 0 0 1 .293.707m-1.688 2.102l1.395-1.395a1 1 0 0 0 .293-.707m-7.46 4.031v-2.53a1.5 1.5 0 0 1 1.5-1.5h5.96"></svg:path></svg:g>`,
})
export class ProiconsDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
