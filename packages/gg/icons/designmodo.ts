import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDesignmodoIcon],svg[gg-designmodo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7 4.054a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-2 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0" clip-rule="evenodd"></svg:path><svg:path d="M22 10.554h-5v-3h5zm-10.45 6.392a4 4 0 0 0 2.829-1.172l2.121 2.121a6.98 6.98 0 0 1-4.95 2.05a6.98 6.98 0 0 1-4.95-2.05l2.122-2.12a4 4 0 0 0 2.828 1.17"></svg:path></svg:g>`,
})
export class GgDesignmodoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
