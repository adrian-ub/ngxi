import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftXboxControllerIcon],svg[mdi-microsoft-xbox-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 15.75C6.75 15.75 6 18 4 19c-2 0-3.5-3 .5-11.5h.25l.44-.83S8 5 9.33 6.23h5.34c1.33-1.23 4.14.44 4.14.44l.44.83h.25C23.5 16 22 19 20 19c-2-1-2.75-3.25-4.75-3.25zM12 7a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrosoftXboxControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
