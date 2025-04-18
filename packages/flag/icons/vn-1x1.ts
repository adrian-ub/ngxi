import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVn1x1Icon],svg[flag-vn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagVn1x10"><svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagVn1x10)" transform="translate(-128)scale(.72249)"><svg:path fill="#da251d" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#ff0" d="m661 527.5l-124-92.6l-123.3 93.5l45.9-152l-123.2-93.8l152.4-1.3L536 129.8L584.3 281l152.4.2l-122.5 94.7z"></svg:path></svg:g>`,
})
export class FlagVn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
