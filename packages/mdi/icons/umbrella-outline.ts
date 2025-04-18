import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaOutlineIcon],svg[mdi-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C8.9 4 6.18 6.03 5.3 9h13.4A7 7 0 0 0 12 4m0-2a9 9 0 0 1 9 9h-8v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-8H3a9 9 0 0 1 9-9"></svg:path>`,
})
export class MdiUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
