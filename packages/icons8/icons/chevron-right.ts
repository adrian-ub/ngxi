import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ChevronRightIcon],svg[icons8-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.25 2.594l-.72.687l-3.59 3.626l-.688.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.72.686l.72-.687l12-12l.686-.72l-.687-.72l-12-12l-.72-.686zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.72-.72l-.72-.72l-7.688-7.655l2.188-2.188z"></svg:path>`,
})
export class Icons8ChevronRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
