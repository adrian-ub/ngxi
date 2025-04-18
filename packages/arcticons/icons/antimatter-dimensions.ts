import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAntimatterDimensionsIcon],svg[arcticons-antimatter-dimensions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13.422" cy="12.73" r="4.683" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.91 8.193a4.684 4.684 0 0 0-8.347 1.067m6.498 5.35a4.69 4.69 0 0 0-5.028-1.082m-2.923 3.567a4.69 4.69 0 0 0 1.7 4.466"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.226 16.45a5 5 0 0 0 .045-.651a4.683 4.683 0 1 0-7.852 3.447"></svg:path><svg:circle cx="26.243" cy="23.56" r="4.683" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.838 20.098a4.684 4.684 0 0 0-8.84-.88"></svg:path><svg:circle cx="9.071" cy="37.344" r="4.571" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.359 16.933a4.684 4.684 0 0 0 2.063 8.888a5 5 0 0 0 .645-.044"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.753 22.228a4.683 4.683 0 1 0-4.433 8.054m5.939-3.113a4.7 4.7 0 0 0-1.893 2.185m.911 5.039a4.683 4.683 0 1 0 6.388-6.825"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.197 32.418a4.682 4.682 0 1 0 .664-8.093"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.529 28.845a4.684 4.684 0 1 0-3.386-4.783m1.217-6.436a4.684 4.684 0 1 0-5.887-6.235"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.791 9.616a3.225 3.225 0 1 0-5.877 2.176M10.937 25.105a3.225 3.225 0 0 0 4.8 4.3"></svg:path><svg:circle cx="19.87" cy="32.249" r="3.224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.838 35.333a3.225 3.225 0 1 0 6.059-2.187"></svg:path>`,
})
export class ArcticonsAntimatterDimensionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
