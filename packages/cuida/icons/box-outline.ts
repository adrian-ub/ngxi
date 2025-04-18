import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaBoxOutlineIcon],svg[cuida-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="box-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="m14.179 2.948l4.57 2.64a4.36 4.36 0 0 1 2.18 3.773v5.278a4.36 4.36 0 0 1-2.18 3.774l-4.57 2.639a4.36 4.36 0 0 1-4.358 0l-4.57-2.64a4.36 4.36 0 0 1-2.18-3.773V9.361c0-1.557.831-2.995 2.18-3.774l4.57-2.639a4.36 4.36 0 0 1 4.358 0m-1 1.732a2.36 2.36 0 0 0-2.358 0l-4.57 2.64a2.36 2.36 0 0 0-1.18 2.04v5.28c0 .841.45 1.62 1.18 2.04l4.57 2.64c.73.42 1.628.42 2.358 0l4.57-2.64a2.36 2.36 0 0 0 1.18-2.04V9.36c0-.841-.45-1.62-1.18-2.04z"></svg:path><svg:path d="M10.499 11.796L4.696 8.894l.894-1.788l5.803 2.901c.382.191.832.191 1.214 0l5.803-2.901l.895 1.788l-5.803 2.902a3.36 3.36 0 0 1-3.003 0"></svg:path><svg:path d="M13 11.428v9.143h-2v-9.143z"></svg:path></svg:g></svg:g>`,
})
export class CuidaBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
