import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeynoteFillIcon],svg[ri-keynote-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2c.552 0 1.086.43 1.195.977l1.61 8.046c.108.54-.26.977-.797.977H13v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2z"></svg:path>`,
})
export class RiKeynoteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
