import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epUmbrellaIcon],svg[ep-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 768a32 32 0 1 1 64 0a64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0m570.688-320a384.128 384.128 0 0 0-757.376 0z"></svg:path>`,
})
export class EpUmbrellaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
