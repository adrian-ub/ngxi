import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBookTagIcon],svg[ps-book-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 512h341v-43H88q-17 0-30-12.5T45 427q0-18 13-30.5T88 384h341V0H67Q39 0 21 18.5T3 64v363q0 35 25 60t60 25M45 64q0-21 22-21h320v298H88q-19 0-43 11zm22 363q0 21 21 21h341v-43H88q-21 0-21 22M344 85H109v128h235zm-43 86H152v-43h149z"></svg:path>`,
})
export class PsBookTagIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
