import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormPictureFemaleAttachOutlineIcon],svg[bubbles-form-picture-female-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.24 18.5H3.506a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.75m-4.538 10.227l3.822-3.822a1.422 1.422 0 0 1 2.01 2.012l-4.44 4.439a2.845 2.845 0 0 1-4.023-4.023l4.871-4.87a4.267 4.267 0 0 1 6.034 6.034L17.991 23.5"></svg:path><svg:path d="M11.511 15.5h-7a5 5 0 0 1 9.33-2.5m-.693-3.856a3.94 3.94 0 0 1-.573-2.181V6.07a3.07 3.07 0 0 0-6.138 0v.892a3.94 3.94 0 0 1-.573 2.181"></svg:path><svg:path d="M6.437 6.578A4.07 4.07 0 0 0 9.506 5.17a4.07 4.07 0 0 0 3.069 1.407"></svg:path><svg:path d="M12.211 6.561a2.708 2.708 0 0 1-5.41 0"></svg:path></svg:g>`,
})
export class BubblesFormPictureFemaleAttachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
