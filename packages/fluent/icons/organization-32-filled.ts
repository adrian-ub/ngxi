import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOrganization32FilledIcon],svg[fluent-organization-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a5 5 0 1 1 5.999 4.9V15h5.268A2.733 2.733 0 0 1 25 17.732V20.1a5.002 5.002 0 0 1-1 9.9a5 5 0 0 1-1-9.9v-2.368a.733.733 0 0 0-.733-.733H9.733a.733.733 0 0 0-.733.733V20.1A5.002 5.002 0 0 1 8 30a5 5 0 0 1-1-9.9v-2.368a2.733 2.733 0 0 1 2.733-2.733H15v-3.1A5 5 0 0 1 11 7"></svg:path>`,
})
export class FluentOrganization32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
