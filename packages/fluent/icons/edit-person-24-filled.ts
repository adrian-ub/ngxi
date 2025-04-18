import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditPerson24FilledIcon],svg[fluent-edit-person-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.891 3.048a3.578 3.578 0 1 1 5.061 5.06l-.892.893L15 3.94zM13.94 5.001L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l5.25-5.251a3.5 3.5 0 0 1 4.555-4.556l.193-.192zM20 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentEditPerson24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
