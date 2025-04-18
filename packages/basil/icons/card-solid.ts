import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCardSolidIcon],svg[basil-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.184 4.666L12 4.5l-7.184.166A3.06 3.06 0 0 0 1.87 7.17a26.7 26.7 0 0 0 0 9.66a3.06 3.06 0 0 0 2.945 2.504L12 19.5l7.184-.166a3.06 3.06 0 0 0 2.945-2.504a26.7 26.7 0 0 0 0-9.66a3.06 3.06 0 0 0-2.945-2.504M21 11a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class BasilCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
