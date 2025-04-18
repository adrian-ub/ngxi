import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelArrowright2Icon],svg[raphael-arrowright2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.13 22.186L16.315 16L10.13 9.81l3.535-3.536L23.39 16l-9.725 9.725z"></svg:path>`,
})
export class RaphaelArrowright2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
