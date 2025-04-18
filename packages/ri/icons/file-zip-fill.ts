import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileZipFillIcon],svg[ri-file-zip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v2h2V2h8.007c.548 0 .993.444.993.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2zm2 2v2h2V4zm-2 2v2h2V6zm2 2v2h2V8zm-2 2v2h2v-2zm2 2v2h-2v3h4v-5z"></svg:path>`,
})
export class RiFileZipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
