import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormPictureMaleAttachOutlineIcon],svg[bubbles-form-picture-male-attach-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.24 18.5H3.506a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.75m-4.538 10.227l3.822-3.822a1.422 1.422 0 0 1 2.01 2.012l-4.44 4.439a2.845 2.845 0 0 1-4.023-4.023l4.871-4.87a4.267 4.267 0 0 1 6.034 6.034L17.991 23.5"></svg:path><svg:path d="M13.534 12.537A5 5 0 0 0 4.506 15.5h6.025M6.921 4.477a4.98 4.98 0 0 0 5.558 1.117"></svg:path><svg:path d="M9.506 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class BubblesFormPictureMaleAttachOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
