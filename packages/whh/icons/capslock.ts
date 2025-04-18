import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCapslockIcon],svg[whh-capslock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M869 513H703v191q0 27-18.5 45.5T640 768H256q-26 0-45-18.5T192 704V513H28q-12 0-20-13t-7-31t13-30L403 19q18-19 45-19t46 19l388 420q12 12 13.5 30t-6.5 31t-20 13M256 831h384q26 0 44.5 19t18.5 45v65q0 26-18.5 45t-44.5 19H256q-26 0-45-18.5T192 960v-65q0-26 19-45t45-19"></svg:path>`,
})
export class WhhCapslockIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
