import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGitterIcon],svg[simple-icons-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.501 4.001H10.5V24H8.501zm6.999 0V24h-2V4.001zM3.5 0h2.001v15H3.5zm15 4.001h2V15h-2z"></svg:path>`
})
export class SimpleIconsGitterIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
