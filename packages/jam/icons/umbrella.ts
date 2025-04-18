import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaIcon],svg[jam-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a8 8 0 0 0-7.748 6h15.496C16.86 5.55 13.728 3 10 3m-1 8H0c0-5.186 3.947-9.45 9.001-9.95L9 1a1 1 0 1 1 1.999.05C16.053 1.55 20 5.813 20 11h-9v6a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamUmbrellaIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
