import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feUmbrellaIcon],svg[fe-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 20a2 2 0 1 1-2-2v-5H3a9 9 0 0 1 8-8.945V3a1 1 0 0 1 2 0v1.055A9 9 0 0 1 21 13h-8zm-7.71-9h13.42a7.003 7.003 0 0 0-13.42 0"></svg:path>`,
})
export class FeUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
