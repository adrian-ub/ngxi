import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosModernizrIcon],svg[logos-modernizr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D91B77" d="M0 122.88V81.92h40.96V40.96h40.96V0h40.96v122.88zM133.12 0C200.986 0 256 55.016 256 122.879H133.12z"></svg:path>`,
})
export class LogosModernizrIcon {
  readonly viewBox = input("0 0 256 123")
  readonly width = input("2.09em")
  readonly height = input("1em")
}
