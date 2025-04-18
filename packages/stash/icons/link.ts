import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashLinkIcon],svg[stash-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.588 5.02a4.525 4.525 0 0 1 6.399 6.399l-.01.01l-2.264 2.264a4.525 4.525 0 0 1-6.824-.489a.75.75 0 1 1 1.201-.898a3.026 3.026 0 0 0 4.562.327l2.26-2.26a3.026 3.026 0 0 0-4.278-4.277L12.34 7.383a.75.75 0 1 1-1.058-1.064zM8.905 9.266a4.525 4.525 0 0 1 5.205 1.53a.75.75 0 0 1-1.201.898a3.024 3.024 0 0 0-4.562-.327l-2.26 2.26a3.025 3.025 0 0 0 4.277 4.278l1.286-1.286a.75.75 0 0 1 1.061 1.06l-1.3 1.3a4.525 4.525 0 0 1-6.399-6.398l.01-.01l2.264-2.264a4.5 4.5 0 0 1 1.62-1.04" clip-rule="evenodd"></svg:path>`,
})
export class StashLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
