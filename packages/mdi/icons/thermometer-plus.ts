import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiThermometerPlusIcon],svg[mdi-thermometer-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11V8h-2v3h-3v2h3v3h2v-3h3v-2m-11 2V5c0-1.66-1.34-3-3-3S5 3.34 5 5v8c-2.21 1.66-2.66 4.79-1 7s4.79 2.66 7 1s2.66-4.79 1-7a4.7 4.7 0 0 0-1-1M8 4c.55 0 1 .45 1 1v3H7V5c0-.55.45-1 1-1"></svg:path>`,
})
export class MdiThermometerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
