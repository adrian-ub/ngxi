import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWarningOffOutlineIcon],svg[material-symbols-warning-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-1-3v-4.025l2 2V15zm10.825 3.95l-5.45-5.425L12 6l-1.175 2l-1.45-1.45L12 2zM4.45 19h11.725L8.75 11.575zm16.025 4.3l-2.3-2.3H1l6.3-10.875L.675 3.5L2.1 2.075l19.8 19.8zM13.6 10.775"></svg:path>`,
})
export class MaterialSymbolsWarningOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
