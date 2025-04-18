import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignInsertRowRightOutlinedIcon],svg[ant-design-insert-row-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M856 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8m-200 0H192c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3M392 840H232V664h160zm0-240H232V424h160zm0-240H232V184h160zm224 480H456V664h160zm0-240H456V424h160zm0-240H456V184h160z"></svg:path>`,
})
export class AntDesignInsertRowRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
