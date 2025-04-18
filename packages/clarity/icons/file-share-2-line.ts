import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFileShare2LineIcon],svg[clarity-file-share-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 4H7.83A1.89 1.89 0 0 0 6 5.91v24.18A1.89 1.89 0 0 0 7.83 32h20.34A1.87 1.87 0 0 0 30 30.09V9Zm-1 1.78L28.2 10H24ZM8 30V6h14v6h6v18Z"></svg:path><svg:path fill="currentColor" d="M22 21.81a2.1 2.1 0 0 0-1.44.62l-5.72-2.66v-.44l5.66-2.65a2.08 2.08 0 1 0 .06-2.94a2.14 2.14 0 0 0-.64 1.48v.23l-5.64 2.66a2.08 2.08 0 1 0-.08 2.95l.08-.08l5.67 2.66v.3a2.09 2.09 0 1 0 2.05-2.1Z"></svg:path>`,
})
export class ClarityFileShare2LineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
