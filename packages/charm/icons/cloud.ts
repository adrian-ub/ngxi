import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCloudIcon],svg[charm-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 3.75A3.25 3.25 0 0 0 3.75 7q.003.383.094.756h-.002A2.25 2.25 0 0 0 4 12.25h7.5a2.75 2.75 0 1 0-1.252-5.2L10.25 7A3.25 3.25 0 0 0 7 3.75"></svg:path>`,
})
export class CharmCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
