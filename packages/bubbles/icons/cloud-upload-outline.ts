import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCloudUploadOutlineIcon],svg[bubbles-cloud-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 23.25v-9M8.25 18L12 14.25L15.75 18"></svg:path><svg:path d="M17.25 15.75h1.125a4.876 4.876 0 1 0-2.764-8.885A7.5 7.5 0 1 0 6.75 15.6"></svg:path></svg:g>`,
})
export class BubblesCloudUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
