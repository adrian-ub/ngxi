import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTourBusIcon],svg[icon-park-tour-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 23H39V34C39 35.1046 38.1046 36 37 36H11C9.89543 36 9 35.1046 9 34V23Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V23H9V8Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 42C13.3431 42 12 40.6569 12 39V36H18V39C18 40.6569 16.6569 42 15 42Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 42C31.3431 42 30 40.6569 30 39V36H36V39C36 40.6569 34.6569 42 33 42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M6 12V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M42 12V16"></svg:path><svg:circle cx="15" cy="30" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="30" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31 6L22 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M38 7L33 13"></svg:path></svg:g>`,
})
export class IconParkTourBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
