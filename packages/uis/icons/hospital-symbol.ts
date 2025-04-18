import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisHospitalSymbolIcon],svg[uis-hospital-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 14c0 .6-.4 1-1 1s-1-.4-1-1v-3h-4v3c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v3h4V8c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisHospitalSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
