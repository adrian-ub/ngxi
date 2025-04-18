import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCouchFillIcon],svg[ph-couch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 100V72a16 16 0 0 1 16-16h84a4 4 0 0 1 4 4v76H64a32 32 0 0 0-32-32H20a4 4 0 0 1-4-4m208 4h12a4 4 0 0 0 4-4V72a16 16 0 0 0-16-16h-84a4 4 0 0 0-4 4v76h56a32 32 0 0 1 32-32m8 16h-8a16 16 0 0 0-16 16v8a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-8a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v15.73a8.18 8.18 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-16h160v15.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V184h8a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCouchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
