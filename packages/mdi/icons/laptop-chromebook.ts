import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopChromebookIcon],svg[mdi-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 15H4V5h16m-6 13h-4v-1h4m8 1V3H2v15H0v2h24v-2h-2z" fill="currentColor"></svg:path>`,
})
export class MdiLaptopChromebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
