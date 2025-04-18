import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptopBriefcase32FilledIcon],svg[fluent-laptop-briefcase-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v4.3a3.5 3.5 0 0 0-2.5-1.05h-4A3.5 3.5 0 0 0 18 16v.008a3.75 3.75 0 0 0-3.44 3.069a1.5 1.5 0 0 0-.06.423V22H7.25A3.25 3.25 0 0 1 4 18.75zM3 26h11.5v-2H3a1 1 0 1 0 0 2m16.5-10v1.5h-1.25a2.25 2.25 0 0 0-2.236 2H16v7.25A2.25 2.25 0 0 0 18.25 29h10.5A2.25 2.25 0 0 0 31 26.75V19.5h-.014a2.25 2.25 0 0 0-2.236-2H27.5V16a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5h-5V16a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentLaptopBriefcase32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
