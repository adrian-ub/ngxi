import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBriefcaseMedicalIcon],svg[la-briefcase-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2zm0 2h4v1h-4zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1m9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaBriefcaseMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
