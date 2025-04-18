import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBd1x1Icon],svg[flag-bd-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006a4e" d="M0 0h512v512H0z"></svg:path><svg:circle cx="230" cy="256" r="170.7" fill="#f42a41"></svg:circle>`,
})
export class FlagBd1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
