import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortAlphabeticalIcon],svg[lineicons-sort-alphabetical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.132 3.515a.75.75 0 0 0-1.268.204l-2.78 6.884a.75.75 0 0 0 1.39.562l.467-1.157h3.238l.467 1.157a.75.75 0 1 0 1.39-.562l-2.78-6.882a.8.8 0 0 0-.124-.206m.44 4.993h-2.024l1.012-2.506z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.972 3.47a.75.75 0 0 1 1.06 0l3.002 3a.75.75 0 0 1-1.06 1.061l-1.722-1.72v12.38l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 1 1 1.06-1.06l1.722 1.72V5.811L5.03 7.53a.75.75 0 1 1-1.06-1.06zm7.648 11.402a.75.75 0 0 1 0-1.5h5.88a.75.75 0 0 1 .53 1.28l-4.599 4.599H20.5a.75.75 0 0 1 0 1.5h-5.88a.75.75 0 0 1-.53-1.28l4.599-4.6z"></svg:path>`,
})
export class LineiconsSortAlphabeticalIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
