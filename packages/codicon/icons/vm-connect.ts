import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconVmConnectIcon],svg[codicon-vm-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 2h13l.5.5v5.503a5 5 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10z" clip-rule="evenodd"></svg:path><svg:path d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 7a3 3 0 1 1 0-6.001A3 3 0 0 1 12 15"></svg:path><svg:path fill-rule="evenodd" d="m12.133 11.435l1.436 1.436l.431-.431l-1.004-1.005L14 10.431l-.431-.43zm-1.129 1.067L10 11.498l.431-.431l1.436 1.435l-1.436 1.436l-.431-.431z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconVmConnectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
