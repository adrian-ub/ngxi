import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRubygemsIcon],svg[logos-rubygems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#D34231"><svg:path d="m76.748 97.434l-.163-.163l-36.11 36.11l87.674 87.512l36.11-35.948l51.564-51.563l-36.11-36.11v-.164H76.584z"></svg:path><svg:path d="M127.823.976L.135 74.173v146.395l127.688 73.197l127.689-73.197V74.173zm103.29 205.603l-103.29 59.534l-103.29-59.534V87.837l103.29-59.534l103.29 59.534z"></svg:path></svg:g>`,
})
export class LogosRubygemsIcon {
  readonly viewBox = input("0 0 256 293")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
