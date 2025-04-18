import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelRwIcon],svg[raphael-rw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 15.5l10.3 5.947v-5.6l9.7 5.6V9.552l-9.7 5.6v-5.6z"></svg:path>`,
})
export class RaphaelRwIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
