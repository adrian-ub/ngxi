import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerAutoIcon],svg[mdi-thermometer-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-.3-.4-.6-.7-1-1V5c0-1.7-1.3-3-3-3S5 3.3 5 5v8c-2.2 1.7-2.7 4.8-1 7s4.8 2.7 7 1s2.7-4.8 1-7M9 8H7V5c0-.5.5-1 1-1s1 .5 1 1zm9-5h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L17 5l1.2 3.7z"></svg:path>`,
})
export class MdiThermometerAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
