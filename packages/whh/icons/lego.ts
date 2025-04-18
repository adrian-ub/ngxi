import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLegoIcon],svg[whh-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 704V256q0-27 18.5-45.5T64 192h896q26 0 45 18.5t19 45.5v448zm640-576V64q0-26 18.5-45T704 0h128q26 0 45 19t19 45v64zm-512 0V64q0-26 18.5-45T192 0h128q27 0 45.5 19T384 64v64z"></svg:path>`,
})
export class WhhLegoIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
