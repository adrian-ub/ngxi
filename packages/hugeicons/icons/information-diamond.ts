import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInformationDiamondIcon],svg[hugeicons-information-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.153 4.284c-1.174-.436-1.695-2.18-3.033-2.28a2 2 0 0 0-.24 0c-1.337.1-1.858 1.844-3.032 2.28c-1.243.461-2.943-.484-3.995.568c-1.013 1.013-.117 2.778-.569 3.995c-.461 1.245-2.393 1.76-2.28 3.273c.101 1.337 1.845 1.859 2.28 3.033c.452 1.217-.444 2.982.569 3.995c1.052 1.052 2.752.107 3.995.568c1.173.436 1.695 2.18 3.033 2.28q.12.009.239 0c1.338-.1 1.86-1.844 3.033-2.28c1.217-.451 2.982.445 3.995-.568c1.087-1.087.04-2.85.614-4.106c.53-1.156 2.344-1.698 2.234-3.161c-.1-1.338-1.843-1.86-2.28-3.034c-.46-1.243.484-2.942-.568-3.995s-2.752-.107-3.995-.568"></svg:path><svg:path d="M12.242 16v-4c0-.471 0-.707-.146-.854c-.147-.146-.382-.146-.854-.146m.75-3h.01"></svg:path></svg:g>`,
})
export class HugeiconsInformationDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
