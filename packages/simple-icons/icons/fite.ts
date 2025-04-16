import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFiteIcon],svg[simple-icons-fite-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.52 8.254c-.347 0-.667.08-1.014.213c-.427.186-.666.454-.746.8L0 15.748h2.533l.801-3.015h3.28l.4-1.464H3.732l.375-1.362c.027-.133.133-.185.346-.185h3.014l.346-1.467zm4.826 0l-2 7.492H8.88l2-7.492zm2.8 0l-.373 1.467h1.84q.24 0 .24.16v.025l-1.574 5.84h2.534l1.574-5.84c.026-.133.132-.185.345-.185h1.842l.319-1.467zm8.534 0c-.347 0-.667.08-1.014.213c-.427.186-.666.453-.746.773l-1.467 5.492c0 .027-.027.081-.027.108v.107c0 .267.162.48.455.614c.24.106.505.185.799.185H22l.4-1.467h-3.013q-.24 0-.24-.16v-.025l.373-1.387h3.28l.4-1.467h-3.28l.348-1.334c.053-.133.159-.185.345-.185h3.014L24 8.254z"></svg:path>`,
})
export class SimpleIconsFiteIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
