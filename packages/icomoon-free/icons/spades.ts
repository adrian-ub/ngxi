import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSpadesIcon],svg[icomoon-free-spades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.775 5.44C9.751 3.192 8.708 1.393 8.001 0c-.708 1.393-1.75 3.192-4.774 5.44c-5.157 3.833-.303 9.182 3.965 6.238c-.278 1.827-1.227 3.159-2.191 3.733v.59h6v-.59c-.964-.574-1.913-1.906-2.191-3.733c4.268 2.944 9.122-2.405 3.965-6.238"></svg:path>`,
})
export class IcomoonFreeSpadesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
