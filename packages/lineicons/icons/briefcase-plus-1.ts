import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcasePlus1Icon],svg[lineicons-briefcase-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.023 8.56a.75.75 0 0 0-.75.75V12h-2.69a.75.75 0 0 0 0 1.5h2.69v2.69a.75.75 0 0 0 1.5 0V13.5h2.691a.75.75 0 0 0 0-1.5h-2.69V9.31a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="currentColor" d="M7.773 5.25A2.25 2.25 0 0 1 10.023 3h4a2.25 2.25 0 0 1 2.25 2.25V6h3a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-14.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 4.773 6h3zm7 0a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75V6h5.5zm-10 2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class LineiconsBriefcasePlus1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
