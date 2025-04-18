import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosJhipsterIconIcon],svg[logos-jhipster-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3474AB" d="M149.545 43.027S22.535-30.675 11.558 15.164c-10.979 45.84-23.326 80.678 10.507 87.12c33.833 6.441 127.48-59.257 127.48-59.257"></svg:path><svg:path fill="#4289C7" d="M127.588 31.942c36.38-18.832 108.456-51.103 116.695-16.928c11.085 45.99 23.54 80.978-10.25 87.548c-23.712 4.6-77.04-26.493-106.616-45.368c-.043-22.342.214-3.232.171-25.252"></svg:path>`,
})
export class LogosJhipsterIconIcon {
  readonly viewBox = input("0 0 256 104")
  readonly width = input("2.47em")
  readonly height = input("1em")
}
