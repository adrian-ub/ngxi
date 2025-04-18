import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconVeevalidateIcon],svg[devicon-veevalidate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#04c971" d="m0 8.574l64 110.852L128 8.574h-21.408l-10.705 18.54L64 82.343l-31.887-55.23h21.979L64 44.27l9.908-17.158L84.611 8.574z"></svg:path>`,
})
export class DeviconVeevalidateIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
