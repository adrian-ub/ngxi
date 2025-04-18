import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsTablesIcon],svg[vs-tables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0Q76 0 38 38T0 128v512q0 52 38 90t90 38h512q52 0 90-38t38-90V128q0-52-38-90T640 0zm0 128h512v512H128zM1024 0q-52 0-90 38t-38 90v512q0 52 38 90t90 38h512q52 0 90-38t38-90V128q0-52-38-90t-90-38zM128 896q-52 0-90 38t-38 90v512q0 52 38 90t90 38h512q52 0 90-38t38-90v-512q0-52-38-90t-90-38zm0 128h512v512H128zm896-128q-52 0-90 38t-38 90v512q0 52 38 90t90 38h512q52 0 90-38t38-90v-512q0-52-38-90t-90-38zm0 128h512v512h-512z"></svg:path>`,
})
export class VsTablesIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}
