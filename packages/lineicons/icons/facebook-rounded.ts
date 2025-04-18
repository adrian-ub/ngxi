import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookRoundedIcon],svg[lineicons-facebook-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="lineiconsFacebookRounded0"><svg:path fill="#fff" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M13.3 21.916v-7.724h2.177l.288-2.719H13.3l.004-1.36c0-.71.067-1.09 1.086-1.09h1.361V6.306h-2.178c-2.616 0-3.537 1.318-3.537 3.536v1.633h-1.63v2.718h1.63v7.615a10 10 0 0 0 3.264.109"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#lineiconsFacebookRounded0)"></svg:path></svg:g>`,
})
export class LineiconsFacebookRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
