import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconVmRunningIcon],svg[codicon-vm-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 2h13l.5.5v5.503a5 5 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10z" clip-rule="evenodd"></svg:path><svg:path d="M12 8q.55 0 1.063.14q.51.141.953.407q.44.265.808.625q.367.36.63.808a4.03 4.03 0 0 1 .405 3.082q-.14.513-.406.954a4.4 4.4 0 0 1-.625.808q-.36.367-.808.63a4.03 4.03 0 0 1-3.082.405a3.8 3.8 0 0 1-.954-.406a4.4 4.4 0 0 1-.808-.625a3.8 3.8 0 0 1-.63-.808a4.03 4.03 0 0 1-.405-3.082q.14-.513.406-.954q.265-.44.625-.808q.36-.367.808-.63A4.03 4.03 0 0 1 12 8m2 3.988L11 10v4z"></svg:path></svg:g>`,
})
export class CodiconVmRunningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
