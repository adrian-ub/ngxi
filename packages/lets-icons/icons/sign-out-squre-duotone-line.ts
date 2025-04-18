import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignOutSqureDuotoneLineIcon],svg[lets-icons-sign-out-squre-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="m15.014 3.164l1.924-.32c1.435-.24 2.153-.36 2.73-.227A3 3 0 0 1 21.775 4.4C22 4.95 22 5.677 22 7.131v9.935c0 1.273 0 1.91-.173 2.397a3 3 0 0 1-2.301 1.95c-.51.09-1.137-.015-2.393-.224l-2.12-.353c-2.394-.4-3.591-.599-4.302-1.438c-.711-.84-.711-2.053-.711-4.48V9.082c0-2.428 0-3.642.71-4.48c.712-.84 1.91-1.04 4.304-1.439"></svg:path><svg:path fill="currentColor" d="m3 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM6.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM3 12.6h9v-1.2H3z"></svg:path>`,
})
export class LetsIconsSignOutSqureDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
