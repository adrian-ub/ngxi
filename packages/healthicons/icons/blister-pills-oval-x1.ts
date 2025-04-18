import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBlisterPillsOvalX1Icon],svg[healthicons-blister-pills-oval-x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 4a4 4 0 0 0-4 4v15a1 1 0 1 1 0 2v15a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V25a1 1 0 1 1 0-2V8a4 4 0 0 0-4-4zm0 20a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-9.757-12.586a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsBlisterPillsOvalX1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
