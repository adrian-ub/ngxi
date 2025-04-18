import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconUnmuteIcon],svg[codicon-unmute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4.83h2.79L8.15 1l.85.35v13l-.85.33l-3.86-3.85H1.5l-.5-.5v-5zM4.85 10L8 13.14V2.56L4.85 5.68l-.35.15H2v4h2.5zM15 7.83a6.97 6.97 0 0 1-1.578 4.428l-.712-.71A5.98 5.98 0 0 0 14 7.83c0-1.4-.48-2.689-1.284-3.71l.712-.71A6.97 6.97 0 0 1 15 7.83m-2 0a4.98 4.98 0 0 1-1.002 3.004l-.716-.716A4 4 0 0 0 12 7.83a4 4 0 0 0-.713-2.28l.716-.716c.626.835.997 1.872.997 2.996m-2 0c0 .574-.16 1.11-.44 1.566l-.739-.738a2 2 0 0 0 .005-1.647l.739-.739c.276.454.435.988.435 1.558" clip-rule="evenodd"></svg:path>`,
})
export class CodiconUnmuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
