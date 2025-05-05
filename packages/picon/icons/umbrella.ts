import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUmbrellaIcon],svg[picon-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v4Q4 9 2 7h2V3H0q4-5 8 0"></svg:path>`,
})
export class PiconUmbrellaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
