import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDatIcon],svg[logos-dat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 74.055l128-73.9l128 73.9v147.801l-128 73.902L0 221.856v-147.8z" fill="#FFF"></svg:path><svg:path d="M128.236 15.042L13.212 81.657l.682 1.182l56.913 33.314l56.744-98.918l.685-2.193z" fill="#95CA71"></svg:path><svg:path d="M128.156 15.15l.673 1.404l.511 130.016l-1.184 1.588l-1.798-.226l-56.232-32.12l58.03-100.662z" fill="#7DC262"></svg:path><svg:path d="M128.085 62.817l.132 85.233l2.146-.373l72.334-41.493l-74.612-43.367z" fill="#67BC59"></svg:path><svg:path d="M128.085 63.814l.151-48.772L243.27 81.6l-.954 1.325l-40.215 23.77l-74.016-42.881z" fill="#51B755"></svg:path><svg:path d="M185.487 178.605l55.721 32.973l2.063 2.996l-115.038 66.528l2.045-6.646l55.21-95.851z" fill="#51B755"></svg:path><svg:path d="M186.765 179.372l-54.443-31.184l-4.105-.137l-2.03 4.739l.512 124.222l1.518 4.09l58.548-101.73z" fill="#67BC59"></svg:path><svg:path d="M128.217 148.05l-4.841 1.161l-69.78 40.896l72.08 42.43l2.54-.34V148.05z" fill="#95CA71"></svg:path><svg:path d="M128.232 232.197v48.905l-115.02-66.537l2.3-2.731l38.34-22.494l74.38 42.857z" fill="#7DC262"></svg:path><svg:path d="M243.27 81.6v132.973L128.217 148.05L243.271 81.6z" fill="#39B353"></svg:path><svg:path d="M128.217 148.05L13.212 81.657v132.909l115.005-66.516z" fill="#B1D58B"></svg:path>`,
})
export class LogosDatIcon {
  readonly viewBox = input("0 0 256 296")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
