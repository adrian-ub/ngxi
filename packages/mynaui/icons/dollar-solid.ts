import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDollarSolidIcon],svg[mynaui-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a.75.75 0 0 1 .75.75v1.25H17a.75.75 0 0 1 0 1.5h-4.25v5.5h1.75a4.25 4.25 0 0 1 0 8.5h-1.75V21a.75.75 0 0 1-1.5 0v-1.25H6a.75.75 0 0 1 0-1.5h5.25v-5.5H9.5a4.25 4.25 0 0 1 0-8.5h1.75V3a.75.75 0 0 1 .75-.75m-.75 3.5H9.5a2.75 2.75 0 0 0 0 5.5h1.75zm1.5 7v5.5h1.75a2.75 2.75 0 1 0 0-5.5z"></svg:path>`,
})
export class MynauiDollarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
