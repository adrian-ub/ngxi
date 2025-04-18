import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSafariSolidIcon],svg[teenyicons-safari-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.958 10.042l1.906-3.178l3.178-1.906l-1.906 3.178z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5A7.5 7.5 0 0 1 7.5 0A7.5 7.5 0 0 1 15 7.5A7.5 7.5 0 0 1 7.5 15A7.5 7.5 0 0 1 0 7.5m11.929-3.743a.5.5 0 0 0-.686-.686L6.136 6.136L3.07 11.243a.5.5 0 0 0 .686.686l5.107-3.065z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSafariSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
