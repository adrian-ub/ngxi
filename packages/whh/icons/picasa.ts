import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPicasaIcon],svg[whh-picasa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M986 704H768V69q117 68 186.5 185.5T1024 512q0 99-38 192M704 404L333 33Q421 0 512 0q99 0 192 38zM452 240L24 668Q0 592 0 512q0-144 74-265T271 60zM256 525v430Q118 875 50 731zm64 243h635q-68 117-185.5 186.5T512 1024q-99 0-192-38z"></svg:path>`,
})
export class WhhPicasaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
