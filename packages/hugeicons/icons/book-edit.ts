import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookEditIcon],svg[hugeicons-book-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.022 6.787v13M11 19.5c-.222 0-.677-.242-1.585-.726c-.923-.492-2.198-.982-3.832-1.29c-1.834-.344-2.75-.516-3.167-1.025C2 15.949 2 15.135 2 13.504V7.097c0-1.783 0-2.675.649-3.224c.648-.549 1.41-.406 2.933-.12c3.008.566 4.8 1.749 5.418 2.428c.618-.679 2.41-1.862 5.418-2.427c1.523-.287 2.285-.43 2.933.119c.649.549.649 1.44.649 3.224V10m.864 2.94l.695.692a1.496 1.496 0 0 1 0 2.12l-3.642 3.696a2 2 0 0 1-1.051.552l-2.257.488a.5.5 0 0 1-.598-.593l.48-2.235c.075-.397.268-.762.555-1.047l3.688-3.674a1.51 1.51 0 0 1 2.13 0" color="currentColor"></svg:path>`,
})
export class HugeiconsBookEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
