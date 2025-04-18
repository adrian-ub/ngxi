import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLandmark11Icon],svg[maki-landmark-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5 9H8V5h1l1-2c-.7.1-1.3.1-2 0c-.7-.3-1.4-.6-2-1v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V2c-.6.4-1.3.7-2 1c-.7.1-1.3.1-2 0l1 2h1v4H1.5c-.3 0-.5.2-.5.5s.2.5.5.5h8c.3 0 .5-.2.5-.5S9.8 9 9.5 9zM7 9H4V5h3v4z" fill="currentColor"></svg:path>`,
})
export class MakiLandmark11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
