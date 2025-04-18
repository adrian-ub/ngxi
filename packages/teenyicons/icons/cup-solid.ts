import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsCupSolidIcon],svg[teenyicons-cup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h1V0H7zM5 2v2H4V2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 6.5A1.5 1.5 0 0 1 1.5 5h9a1.5 1.5 0 0 1 1.415 1H13.5A1.5 1.5 0 0 1 15 7.5v2a1.5 1.5 0 0 1-1.5 1.5H12v.5A3.5 3.5 0 0 1 8.5 15h-5A3.5 3.5 0 0 1 0 11.5zM12 10h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H12z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsCupSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
