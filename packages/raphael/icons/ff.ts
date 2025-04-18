import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFfIcon],svg[raphael-ff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 15.5L15.2 9.552v5.6l-9.7-5.6v11.895l9.7-5.6v5.6z"></svg:path>`,
})
export class RaphaelFfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
