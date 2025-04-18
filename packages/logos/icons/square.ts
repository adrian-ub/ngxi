import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSquareIcon],svg[logos-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2E3B4E"><svg:path d="M212.651 0H42.67C19.107 0 0 19.1 0 42.67v169.98c0 23.569 19.107 42.67 42.67 42.67h169.98c23.569 0 42.67-19.101 42.67-42.67V42.67C255.326 19.101 236.226 0 212.65 0m-3.748 195.448c0 7.438-6.029 13.46-13.461 13.46H59.908c-7.439 0-13.467-6.022-13.467-13.46V59.908c0-7.439 6.028-13.467 13.467-13.467h135.534c7.432 0 13.46 6.028 13.46 13.467z"></svg:path><svg:path d="M100.57 162.48c-4.27 0-7.729-3.482-7.729-7.77v-54.1c0-4.287 3.458-7.769 7.729-7.769h54.18c4.283 0 7.73 3.482 7.73 7.77v54.1c0 4.287-3.447 7.768-7.73 7.768z"></svg:path></svg:g>`,
})
export class LogosSquareIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
