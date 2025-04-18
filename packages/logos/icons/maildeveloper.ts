import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMaildeveloperIcon],svg[logos-maildeveloper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosMaildeveloper0" x1="50%" x2="0%" y1="33.756%" y2="100%"><svg:stop offset="0%" stop-color="#60676F"></svg:stop><svg:stop offset="100%" stop-color="#303439"></svg:stop></svg:lineargradient></svg:defs><svg:g fill="none"><svg:path fill="#393E42" d="M21.331 158.118v-42.165h128v42.165z"></svg:path><svg:path fill="#60676F" d="M0 158.118V0h42.67l42.66 42.165L128 0h42.67S256 0 256 79.059s-85.33 79.059-85.33 79.059H128V52.706L85.33 94.87L42.67 52.706v105.412zM170.67 42.165v73.788s41.787 0 42.66-36.894c.882-36.894-42.66-36.894-42.66-36.894"></svg:path><svg:path fill="url(#logosMaildeveloper0)" d="M252.755 54.37c2.07 7.228 3.245 15.413 3.245 24.689c0 79.059-85.33 79.059-85.33 79.059V21.082s51.365 8.787 82.085 33.288m-82.086-12.205v73.788s41.788 0 42.662-36.894c.88-36.894-42.662-36.894-42.662-36.894"></svg:path></svg:g>`,
})
export class LogosMaildeveloperIcon {
  readonly viewBox = input("0 0 256 159")
  readonly width = input("1.62em")
  readonly height = input("1em")
}
