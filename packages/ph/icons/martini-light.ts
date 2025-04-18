import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMartiniLightIcon],svg[ph-martini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 44.24A6 6 0 0 0 232 34H24a6 6 0 0 0-4.24 10.24L122 146.49V210H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-63.51ZM70.49 78h115L128 135.51Zm147-32l-20 20h-139l-20-20Z"></svg:path>`,
})
export class PhMartiniLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
