import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCirclesIcon],svg[mdi-google-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 15H17c1 0 2-.2 2.87-.54c-.7 4.27-4.4 7.54-8.87 7.54c-5 0-9-4.03-9-9c0-4.47 3.27-8.17 7.54-8.87C9.2 5 9 6 9 7v.34c-2.32.82-4 3.04-4 5.66a6 6 0 0 0 6 6c2.62 0 4.84-1.68 5.66-4m.34-5a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m0-9a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-3.32 2.69-6 6-6"></svg:path>`,
})
export class MdiGoogleCirclesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
