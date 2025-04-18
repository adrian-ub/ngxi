import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAutohotkeyIcon],svg[catppuccin-autohotkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x="1.5" y="1.5" fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.536" d="m4.5 11.83l3.263-7.66l3.737 7.66m-5.356-1.69H9.56" transform="matrix(.3911 0 0 .39765 1.107 8.405)"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.556" d="m4.5 11.83l-.007-7.66m6.136-.006l-.019 7.666M4.987 8.21h4.452" transform="matrix(.39109 0 0 .39152 5.183 8.371)"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.556" d="m4.5 11.83l-.007-7.66m2.03 4.013l3.081 3.697M4.488 9.277L9.65 4.305" transform="matrix(.39109 0 0 .39152 9.085 8.358)"></svg:path>`,
})
export class CatppuccinAutohotkeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
