import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChefIcon],svg[picon-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5C0 5 0 2 2 2q2-2 4 0c2 0 2 3 0 3v3H2"></svg:path>`,
})
export class PiconChefIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
