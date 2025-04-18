import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBorderAltIcon],svg[uim-border-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1"></svg:path><svg:circle cx="19.5" cy="11.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="7.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="15.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="7.5" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="11.5" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="15.5" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="19.5" r="1" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimBorderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
