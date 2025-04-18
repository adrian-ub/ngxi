import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDecagramOutlineIcon],svg[mdi-decagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-2.44 2.78l.34 3.68l-3.61.82l-1.89 3.18L12 21l-3.4 1.47l-1.89-3.18l-3.61-.82l.34-3.69L1 12l2.44-2.79l-.34-3.68l3.61-.81L8.6 1.54L12 3l3.4-1.46l1.89 3.18l3.61.82l-.34 3.68zm-2.67 0L18.5 9.89l.24-2.79L16 6.5l-1.42-2.43L12 5.18L9.42 4.07L8 6.5l-2.74.59l.24 2.79L3.67 12l1.83 2.1l-.24 2.8l2.74.6l1.42 2.43L12 18.81l2.58 1.11L16 17.5l2.74-.61l-.24-2.79z"></svg:path>`,
})
export class MdiDecagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
