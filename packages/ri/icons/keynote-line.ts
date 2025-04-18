import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeynoteLineIcon],svg[ri-keynote-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.44 10h15.12l-1.2-6H5.64zM13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.197.977l1.609 8.046c.108.54-.26.977-.797.977z"></svg:path>`,
})
export class RiKeynoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
