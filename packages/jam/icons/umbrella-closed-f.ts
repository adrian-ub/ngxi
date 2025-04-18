import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUmbrellaClosedFIcon],svg[jam-umbrella-closed-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 13.983l-6 1.582L6.234 2.207a1 1 0 1 1 1.533 0L14 15.565l-6-1.582v3.582a1 1 0 0 0 2 0a1 1 0 0 1 2 0a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamUmbrellaClosedFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
