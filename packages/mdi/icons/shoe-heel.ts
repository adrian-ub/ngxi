import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShoeHeelIcon],svg[mdi-shoe-heel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h8.7l5.3-4h1v4h2v-4s1-2 1-4s-.5-4-.5-4h-2L18 7l-8 7H8l-5 2z"></svg:path>`,
})
export class MdiShoeHeelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
