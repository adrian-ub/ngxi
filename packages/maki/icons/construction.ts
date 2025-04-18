import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiConstructionIcon],svg[maki-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 11h-1.8L8.2.5C8-.2 7-.2 6.8.5L3.3 11H1.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h12c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5M7 3h1l.7 2H6.4zM5.7 7h3.6l.7 2H5z"></svg:path>`,
})
export class MakiConstructionIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
