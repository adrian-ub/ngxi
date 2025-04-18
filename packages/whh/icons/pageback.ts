import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPagebackIcon],svg[whh-pageback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H832q-27 0-45.5-19T768 960V576q0-27-19-45.5T704 512H512v229q0 11-13.5 19t-32 7.5T437 755L18 427Q0 409 0 383.5T18 340L437 13Q448 1 466.5.5t32 7.5T512 28v228h256q106 0 181 75t75 181v448q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhPagebackIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
