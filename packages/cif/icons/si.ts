import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSiIcon],svg[cif-si-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#EC2227" d="M0 .884h300v150H0z"></svg:path><svg:path fill="#035EA5" d="M0 .884h300v100H0z"></svg:path><svg:path fill="#FFF" d="M0 .884h300v50H0z"></svg:path><svg:path fill="#035EA5" d="m92.908 53.496l1.575-23.246a45.32 45.32 0 0 0-38.81 0l1.575 23.246a25.16 25.16 0 0 0 17.83 22.388a25.16 25.16 0 0 0 17.83-22.388"></svg:path><svg:path fill="#FFF" d="M60.525 56.645A22.36 22.36 0 0 0 75.079 72.94a22.36 22.36 0 0 0 14.554-16.295l-7.277-9.702l-2.911 3.881l-4.366-8.732l-4.366 8.732l-2.911-3.881z"></svg:path><svg:path fill="#035EA5" d="M61.175 59.071a4.85 4.85 0 0 0 6.627 1.776a4.85 4.85 0 0 1 4.851 0a4.86 4.86 0 0 0 4.852 0a4.85 4.85 0 0 1 4.851 0a4.85 4.85 0 0 0 6.627-1.776v1.401a4.85 4.85 0 0 1-6.627 1.776a4.85 4.85 0 0 0-4.851 0a4.85 4.85 0 0 1-4.852 0a4.85 4.85 0 0 0-4.851 0a4.85 4.85 0 0 1-6.627-1.776z"></svg:path><svg:path fill="#035EA5" d="M61.175 61.872a4.85 4.85 0 0 0 6.627 1.776a4.85 4.85 0 0 1 4.851 0a4.86 4.86 0 0 0 4.852 0a4.85 4.85 0 0 1 4.851 0a4.85 4.85 0 0 0 6.627-1.775v1.4a4.85 4.85 0 0 1-6.627 1.776a4.85 4.85 0 0 0-4.851 0a4.85 4.85 0 0 1-4.852 0a4.85 4.85 0 0 0-4.851 0a4.85 4.85 0 0 1-6.627-1.775z"></svg:path><svg:path fill="#FEDC00" d="m75.079 35.421l.364 1.189l1.212-.279l-.848.91l.848.91l-1.212-.28l-.364 1.189l-.364-1.189l-1.212.28l.848-.91l-.848-.91l1.212.279zm-5.458-7.277l.364 1.189l1.211-.279l-.848.91l.848.91l-1.211-.28l-.364 1.189l-.364-1.189l-1.211.28l.847-.91l-.847-.91l1.211.279zm10.915 0l.364 1.189l1.212-.279l-.848.91l.848.91l-1.212-.28l-.364 1.189l-.364-1.189l-1.212.28l.848-.91l-.848-.91l1.212.279z"></svg:path><svg:path fill="#EC2227" d="m57.035 29.632l1.611 23.77a23.76 23.76 0 0 0 16.433 21.014a23.76 23.76 0 0 0 16.432-21.014l1.611-23.77q.675.32 1.361.618l-1.575 23.246a25.16 25.16 0 0 1-17.829 22.389a25.16 25.16 0 0 1-17.83-22.389L55.673 30.25q.687-.298 1.362-.618"></svg:path></svg:g>`,
})
export class CifSiIcon {
  readonly viewBox = input("0 0 300 151")
  readonly width = input("1.99em")
  readonly height = input("1em")
}
