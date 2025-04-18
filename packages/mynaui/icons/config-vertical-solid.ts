import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiConfigVerticalSolidIcon],svg[mynaui-config-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v9.5H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25V3a.75.75 0 0 1 .75-.75m-7 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 5 2.25m-2.75 8A.75.75 0 0 1 3 9.5h4A.75.75 0 0 1 7 11H5.75v10a.75.75 0 0 1-1.5 0V11H3a.75.75 0 0 1-.75-.75m14 0A.75.75 0 0 1 17 9.5h4a.75.75 0 0 1 0 1.5h-1.25v10a.75.75 0 0 1-1.5 0V11H17a.75.75 0 0 1-.75-.75m-4.25 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiConfigVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
