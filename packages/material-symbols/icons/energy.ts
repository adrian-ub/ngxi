import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergyIcon],svg[material-symbols-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22v-1q0-.8.6-1.338T11 19v-7.15q-.55-.2-.962-.575T9.35 10.4l-1.9.5q-.9.2-1.713-.15T4.7 9.55l4.35-1.1q.2-1.025.95-1.7T11.8 6l.6-2.25q.25-.875.963-1.387t1.587-.313l-1.25 4.5q.625.4.963 1.05T15 9q0 .325-.075.638t-.175.612l1.35 1.4q.625.65.738 1.525t-.488 1.475l-3-3q-.075.075-.162.113T13 11.85V19q.8.125 1.4.663T15 21v1zm3-11.5q.625 0 1.063-.437T13.5 9t-.437-1.062T12 7.5t-1.062.438T10.5 9t.438 1.063T12 10.5"></svg:path>`,
})
export class MaterialSymbolsEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
