import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSailboatCoastalIcon],svg[hugeicons-sailboat-coastal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18c-1.406-.937-2.195-2.035-2.606-3.052c-.288-.71-.432-1.066-.135-1.507C3.557 13 4.038 13 5 13h14c.962 0 1.443 0 1.74.441c.298.441.154.797-.134 1.507c-.412 1.017-1.2 2.114-2.606 3.052M15.842 3.465L17.91 6.31c.869 1.194 1.303 1.791.985 2.24S17.721 9 16.008 9h-5.38c-2.186 0-3.28 0-3.567-.539c-.288-.538.461-1.182 1.96-2.47l3.31-2.845c.925-.794 1.388-1.192 1.936-1.142c.549.05.89.52 1.575 1.46M14 13V2M2 21h20" color="currentColor"></svg:path>`,
})
export class HugeiconsSailboatCoastalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
