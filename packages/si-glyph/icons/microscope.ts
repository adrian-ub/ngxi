import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphMicroscopeIcon],svg[si-glyph-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m11.425 3.096l.408-1.001l-.431-.176l.614-1.509l-.883-.358l-.615 1.507l-.396-.162L8.09 6.386l1.709.696l1.123-2.754c1.349.623 2.289 1.692 2.618 3.013c.549 2.208-.786 4.518-3.085 5.684H3.862c-.502 0-.908.348-.908.777l-.906 1.379c0 .43.405.777.906.777h9.072c.502 0 .908-.348.908-.777v-1.379c0-.246-.142-.456-.35-.598c1.854-1.58 2.792-3.914 2.228-6.181c-.427-1.711-1.669-3.136-3.387-3.927"></svg:path><svg:path d="m8.223 6.759l1.748.711l-.238.584l-1.747-.712z"></svg:path></svg:g>`,
})
export class SiGlyphMicroscopeIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
