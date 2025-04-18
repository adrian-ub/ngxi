import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintSmartphoneIcon],svg[pepicons-print-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2.583C6 1.71 6.672 1 7.5 1h9c.828 0 1.5.709 1.5 1.583v15.834C18 19.29 17.328 20 16.5 20h-9c-.828 0-1.5-.709-1.5-1.583V2.583Z" opacity=".8"></svg:path><svg:path d="M5.5 2.54c0-.298.224-.54.5-.54h8c.276 0 .5.242.5.54v12.42c0 .298-.224.54-.5.54H6c-.276 0-.5-.242-.5-.54V2.54Z"></svg:path><svg:path fill-rule="evenodd" d="M4 2.083C4 1.21 4.672.5 5.5.5h9c.828 0 1.5.709 1.5 1.583v15.834c0 .874-.672 1.583-1.5 1.583h-9c-.828 0-1.5-.709-1.5-1.583V2.083Zm1.5-.527c-.276 0-.5.236-.5.527v15.834c0 .291.224.527.5.527h9c.276 0 .5-.236.5-.527V2.083a.514.514 0 0 0-.5-.527h-9Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9 17a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintSmartphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
