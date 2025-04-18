import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiForkAndKnifeIcon],svg[openmoji-fork-and-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M32.07 26.296c0-5.943-5.12-12.16-5.12-10.296s.947 26.632.947 26.632L26.95 58.83a2 2 0 1 0 4 0l-.529-16.29s1.65-10.3 1.65-16.243m13.867-9.557s.112 4.158.112 8.106c0 2.96-.9 4.82-2.181 5.565l.029 28.418a2 2 0 1 1-4 0l.81-28.413c-1.287-.74-2.19-2.602-2.19-5.57c0-3.948.11-8.106.11-8.106"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M32.07 26.296c0-5.943-5.12-12.16-5.12-10.296s.947 26.632.947 26.632L26.95 58.83a2 2 0 1 0 4 0l-.529-16.29s1.65-10.3 1.65-16.243z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M45.938 16.74s.112 4.158.112 8.106c0 2.96-.9 4.82-2.181 5.565h0l.029 28.418a2 2 0 1 1-4 0l.81-28.413h0c-1.287-.74-2.19-2.602-2.19-5.57c0-3.948.11-8.106.11-8.106m3.655 0v9.585"></svg:path></svg:g>`,
})
export class OpenmojiForkAndKnifeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
