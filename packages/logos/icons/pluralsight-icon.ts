import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPluralsightIconIcon],svg[logos-pluralsight-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosPluralsightIcon0" x1="49.999%" x2="49.999%" y1="1.576%" y2="100.443%"><svg:stop offset="0%" stop-color="#DF5430"></svg:stop><svg:stop offset="100%" stop-color="#D7197E"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosPluralsightIcon0)" d="M256 128c0 70.695-57.31 128-128.003 128C57.303 256 0 198.695 0 128S57.303 0 127.997 0C198.69 0 256 57.305 256 128"></svg:path><svg:path fill="#FFFFFE" d="M95.092 61.479v133.029l115.207-66.511zm11.029 19.103l82.12 47.415l-82.12 47.414z"></svg:path><svg:path fill="#FFFFFE" d="M68.609 76.002v103.983l90.046-51.995zm11.029 19.103l56.966 32.885l-56.966 32.898z"></svg:path>`,
})
export class LogosPluralsightIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
