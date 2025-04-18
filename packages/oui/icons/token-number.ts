import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenNumberIcon],svg[oui-token-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 9.812h-.842l-.78 2.335H5.031l.78-2.335H4.6l.182-1.043h1.373l.507-1.504H5.454l.188-1.042h1.367l.792-2.37H8.94l-.792 2.37h.849l.792-2.37h1.145l-.792 2.37H11.4l-.182 1.042H9.8L9.293 8.77h1.248l-.183 1.043H8.946l-.775 2.335H7.026zm-.5-1.043h.842l.513-1.504h-.849z"></svg:path>`,
})
export class OuiTokenNumberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
