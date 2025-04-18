import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoPlusIcon],svg[entypo-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601s-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10s.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4s1 .048 1 .601V9h4.399c.553 0 .601.447.601 1"></svg:path>`,
})
export class EntypoPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
