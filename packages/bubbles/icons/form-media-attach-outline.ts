import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormMediaAttachOutlineIcon],svg[bubbles-form-media-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.964 19.367l3.822-3.821a1.423 1.423 0 1 1 2.014 2.011L15.358 22a2.844 2.844 0 1 1-4.023-4.023L16.2 13.1a4.267 4.267 0 1 1 6.035 6.035l-4.248 4.255"></svg:path><svg:path d="M8.51 23.5h-7a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1H14.8a1 1 0 0 1 .707.293l3.71 3.707a1 1 0 0 1 .293.707V9"></svg:path><svg:path d="M9.01 17h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2l.723-1.447A1 1 0 0 1 8.627 7h2.764a1 1 0 0 1 .895.553L13.01 9h2a1 1 0 0 1 1 1v.5"></svg:path><svg:path d="M10.01 14.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class BubblesFormMediaAttachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
