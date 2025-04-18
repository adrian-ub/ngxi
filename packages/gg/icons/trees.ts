import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTreesIcon],svg[gg-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.74 16.319A5 5 0 0 1 10 17.9V21a1 1 0 1 1-2 0v-3.1A5 5 0 0 1 4 13V7a5 5 0 0 1 9.98-.453A4 4 0 0 1 20 10v4a4 4 0 0 1-3 3.874V21a1 1 0 1 1-2 0v-3.126a4 4 0 0 1-2.26-1.555M12 7v6a3 3 0 0 1-2 2.83V13a1 1 0 1 0-2 0v2.83A3 3 0 0 1 6 13V7a3 3 0 0 1 6 0m5 8.732V13a1 1 0 1 0-2 0v2.732A2 2 0 0 1 14 14v-4a2 2 0 1 1 4 0v4a2 2 0 0 1-1 1.732" clip-rule="evenodd"></svg:path>`,
})
export class GgTreesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
