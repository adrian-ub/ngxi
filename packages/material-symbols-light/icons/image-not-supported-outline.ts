import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImageNotSupportedOutlineIcon],svg[material-symbols-light-image-not-supported-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.11 21.53l-1.57-1.568q-.096.019-.173.028q-.077.01-.173.01H5.615q-.67 0-1.143-.472Q4 19.056 4 18.385V5.805q0-.095.01-.172q.01-.077.048-.154L2.469 3.885l.708-.708l17.646 17.646l-.713.708ZM5.615 19H17.58l-2.5-2.5H7l2.5-3.308l1.885 2.283l1.138-1.53L5 6.42v11.964q0 .269.173.442t.442.173ZM20 17.175l-1-1V5.615q0-.269-.173-.442T18.385 5H7.825l-1-1h11.56q.67 0 1.143.472q.472.472.472 1.143v11.56Zm-6.525-6.525Zm-2.163 2.083Z"></svg:path>`,
})
export class MaterialSymbolsLightImageNotSupportedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
