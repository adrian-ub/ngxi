import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSCircleSolidIcon],svg[mynaui-letter-s-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.25-4.75A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
