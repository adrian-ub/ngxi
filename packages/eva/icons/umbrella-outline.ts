import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaUmbrellaOutlineIcon],svg[eva-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0a1 1 0 0 0-2 0a1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2m-7.94 9a8 8 0 0 1 15.88 0Z"></svg:path>`,
})
export class EvaUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
