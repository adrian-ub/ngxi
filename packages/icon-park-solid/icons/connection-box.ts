import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidConnectionBoxIcon],svg[icon-park-solid-connection-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSConnectionBox0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M43 4H5c-.552 0-1 .488-1 1.09v9.82c0 .602.448 1.09 1 1.09h38c.552 0 1-.488 1-1.09V5.09C44 4.489 43.552 4 43 4Zm0 28H5c-.552 0-1 .488-1 1.09v9.82c0 .602.448 1.09 1 1.09h38c.552 0 1-.488 1-1.09v-9.82c0-.602-.448-1.09-1-1.09Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 16v8.008l20 .01V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 38h12M18 10h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSConnectionBox0)"></svg:path>`,
})
export class IconParkSolidConnectionBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
