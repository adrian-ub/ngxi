import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaClosedIcon],svg[jam-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13.418L0 15L6.234 1.642a1 1 0 1 1 1.533 0L14 15l-6-1.582V17a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0zM7 4.73l-3.383 7.249L7 11.086l3.383.892L7 4.729z"></svg:path>`,
})
export class JamUmbrellaClosedIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
