import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkNote2Icon],svg[nrk-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.914 3H8v11H3v7h5l2-2V5h8.086l.914.914V14h-5v7h5l2-2V5.086zM8 18.172L7.172 19H5v-3h3zm11 0l-.828.828H16v-3h3z"></svg:path>`,
})
export class NrkNote2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
