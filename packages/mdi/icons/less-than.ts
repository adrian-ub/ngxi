import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLessThanIcon],svg[mdi-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 4.14l1 1.72L8.97 12l10.53 6.14l-1 1.72L5 12z"></svg:path>`,
})
export class MdiLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
