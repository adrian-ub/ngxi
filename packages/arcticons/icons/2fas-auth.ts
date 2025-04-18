import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons2fasAuthIcon],svg[arcticons-2fas-auth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.56 42.945l9.925-8.088a9.03 9.03 0 0 0 3.326-7V9.708a2.66 2.66 0 0 0-1.975-2.568l-7.15-1.897a22.17 22.17 0 0 0-11.372 0l-7.15 1.897a2.66 2.66 0 0 0-1.975 2.568v18.15a9.03 9.03 0 0 0 3.325 7l9.926 8.088a2.47 2.47 0 0 0 3.12 0M15.049 14.797h17.902m-17.902 5.979H24m-8.951 5.98h2.082"></svg:path>`,
})
export class Arcticons2fasAuthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
