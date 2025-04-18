import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMiningOutlineIcon],svg[bitcoin-icons-mining-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.265 3.703c-2.536-.225-4.88.459-6.423 1.79c-.19.164-.02.443.226.385c1.717-.41 3.67-.494 5.704-.197zm2.903 2.824c1.935.693 3.62 1.685 4.944 2.853c.189.166.472 0 .38-.235c-.736-1.899-2.486-3.603-4.83-4.595zm-2.687-.591l1.94.484l-1.209 4.851l-1.94-.484zm-1.694 4.731l2.91.726L11.4 20.61l-2.911-.726z"></svg:path><svg:path d="m12.358 3.329l3.396.847l-.665 2.668l-3.396-.847z"></svg:path></svg:g>`,
})
export class BitcoinIconsMiningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
