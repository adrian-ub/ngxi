import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitListIcon],svg[formkit-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="3" cy="2.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="5.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="8.5" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13.5 3h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class FormkitListIcon {
  readonly viewBox = input("0 0 16 11")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
