import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAsteriskIcon],svg[ix-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.676 85.31v144.35l-135.31-43.965l-13.185 40.578L218.296 269.2l-81.028 111.526l34.518 25.078l82.92-114.129l83.814 115.357l34.518-25.079l-81.379-112.008l134.179-43.598l-13.184-40.579l-135.312 43.965V85.31z" clip-rule="evenodd"></svg:path>`,
})
export class IxAsteriskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
