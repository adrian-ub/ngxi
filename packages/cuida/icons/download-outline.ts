import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaDownloadOutlineIcon],svg[cuida-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="download-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M7 22a5 5 0 0 1-5-5v-3a1 1 0 1 1 2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 1 1 2 0v3a5 5 0 0 1-5 5z"></svg:path><svg:path d="M17.715 10.9a1 1 0 0 1-.016 1.415l-4.5 4.4a1 1 0 0 1-1.398 0l-4.5-4.4a1 1 0 1 1 1.398-1.43l2.801 2.739V5a1 1 0 1 1 2 0v8.624l2.8-2.739a1 1 0 0 1 1.415.016Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
