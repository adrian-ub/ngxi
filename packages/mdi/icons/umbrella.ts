import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaIcon],svg[mdi-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 1 9 9h-8v8a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-8H3a9 9 0 0 1 9-9"></svg:path>`,
})
export class MdiUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
