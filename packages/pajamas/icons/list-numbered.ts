import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasListNumberedIcon],svg[pajamas-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2h2v4H1V3H0zm1.637 9.008H0v-1h1.637a1.382 1.382 0 0 1 .803 2.506L1.76 13H3v1H0v-.972L1.859 11.7a.382.382 0 0 0-.222-.693ZM4.75 3a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm-.75 5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class PajamasListNumberedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
