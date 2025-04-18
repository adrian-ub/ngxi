import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons2Icon],svg[healthicons-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 14a4 4 0 0 1 2.61 7.034l-14 13.528A2 2 0 0 0 16 38h16a2 2 0 1 0 0-4H20.948l10.416-10.065A8 8 0 0 0 26 10h-4a8 8 0 0 0-7.544 5.334a2 2 0 0 0 3.771 1.332A4 4 0 0 1 22 14z" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
