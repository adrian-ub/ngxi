import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsFolderOpenIcon],svg[duo-icons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.82 6a2 2 0 0 1 1.972 2.329l-1.666 10A2 2 0 0 1 18.153 20H5.847a2 2 0 0 1-1.973-1.671l-1.666-10A2 2 0 0 1 4.18 6z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
