import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8HomeIcon],svg[icons8-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.594l-.72.687l-13 13l1.44 1.44L5 16.437V28h9V18h4v10h9V16.437l1.28 1.282l1.44-1.44l-13-13zm0 2.844l9 9V26h-5V16h-8v10H7V14.437l9-9z"></svg:path>`,
})
export class Icons8HomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
