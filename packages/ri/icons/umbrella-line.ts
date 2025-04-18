import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUmbrellaLineIcon],svg[ri-umbrella-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 0 0 4 0v-1h2v1a4 4 0 1 1-8 0v-6h-9v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 0 1 2 0zM19.936 11A8.001 8.001 0 0 0 4.06 11z"></svg:path>`,
})
export class RiUmbrellaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
