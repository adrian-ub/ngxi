import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOutSolidIcon],svg[iconoir-mail-out-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 14h6m0 0l-3-3m3 3l-3 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M.25 7A2.75 2.75 0 0 1 3 4.25h13A2.75 2.75 0 0 1 18.75 7v2.129q-.181.12-.341.28a2.25 2.25 0 0 0-.53 2.341H17a2.25 2.25 0 0 0 0 4.5h.878a2.25 2.25 0 0 0 .435 2.239A2.75 2.75 0 0 1 16 19.75H3A2.75 2.75 0 0 1 .25 17zM17 13.25h1.75v1.5H17a.75.75 0 0 1 0-1.5M5.416 8.376a.75.75 0 0 0-.832 1.248l4.5 3a.75.75 0 0 0 .832 0l4.5-3a.75.75 0 0 0-.832-1.248L9.5 11.099z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirMailOutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
