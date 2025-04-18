import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilNavigationSolidIcon],svg[basil-navigation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.82 4.106c-.234-.417-.671-.601-1.06-.606c-.39-.005-.838.17-1.068.6l-.164.307a77.4 77.4 0 0 0-5.986 14.56c-.158.537.141.984.498 1.199c.356.213.86.264 1.291-.008l4.632-2.925c.574-.363 1.388-.358 1.99.029l4.727 3.04c.425.273.927.244 1.29.031c.37-.217.652-.673.479-1.207a82.3 82.3 0 0 0-6.455-14.708z"></svg:path>`,
})
export class BasilNavigationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
