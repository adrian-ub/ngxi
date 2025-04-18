import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlobeLightIcon],svg[mdi-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.1 10c1-1 2.4-1.7 3.9-1.9V2h2v6.1c1.5.2 2.9.9 3.9 1.9zm-1.8 3c-.2.6-.3 1.3-.3 2c0 3.9 3.1 7 7 7s7-3.1 7-7c0-.7-.1-1.4-.3-2z"></svg:path>`,
})
export class MdiGlobeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
