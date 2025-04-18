import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiInstagramIcon],svg[openmoji-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M46.785 12.614h-21.57c-6.96 0-12.601 5.642-12.601 12.602v21.568c0 6.96 5.642 12.602 12.602 12.602h21.568c6.96 0 12.602-5.642 12.602-12.602V25.216c0-6.96-5.642-12.602-12.602-12.602"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M46.785 12.614h-21.57c-6.96 0-12.601 5.642-12.601 12.602v21.568c0 6.96 5.642 12.602 12.602 12.602h21.568c6.96 0 12.602-5.642 12.602-12.602V25.216c0-6.96-5.642-12.602-12.602-12.602z"></svg:path><svg:circle cx="36" cy="36" r="11.29" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="49.709" cy="22.291" r="2.419"></svg:circle>`,
})
export class OpenmojiInstagramIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
