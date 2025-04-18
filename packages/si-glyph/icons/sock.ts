import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSockIcon],svg[si-glyph-sock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M14.146 1.955h.22c.319 0 .578-.177.578-.396V.399c0-.218-.259-.395-.578-.395H7.58c-.319 0-.576.177-.576.395v1.16c0 .219.257.396.576.396zM11.99 13.156c0 .36.072.703.2 1.016c1.638-.412 1.847-2.04 1.735-3.539c-1.107.269-1.935 1.296-1.935 2.523m-8.908.954c0 1.368 1.226 1.742 2.392 1.827a2.63 2.63 0 0 0 .862-1.941a2.64 2.64 0 0 0-1.453-2.349c-1.71 1-1.801 1.71-1.801 2.463"></svg:path><svg:path d="M13.856 9.961c-.102-.791-.248-1.755-.249-2.108c-.017-3.052.302-4.837.302-4.837l-5.81.041s.302 1.558.302 3.286s.709 3.241-2.155 4.612q-.281.135-.529.264a3.4 3.4 0 0 1 .788 4.71c.948-.177 2.962-1.095 4.995-1.56a3.4 3.4 0 0 1-.222-1.178c0-1.59 1.109-2.921 2.578-3.23"></svg:path></svg:g>`,
})
export class SiGlyphSockIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
