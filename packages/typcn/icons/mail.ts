import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMailIcon],svg[typcn-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4l-.037.037l3.646 3.646H5.707l3.646-3.646zM5 17.293V10.54l3.602 3.151zm10.398-3.602L19 10.54v6.75zM19 9v.21l-6.576 5.754a.68.68 0 0 1-.848 0L5 9.21V9z"></svg:path>`,
})
export class TypcnMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
