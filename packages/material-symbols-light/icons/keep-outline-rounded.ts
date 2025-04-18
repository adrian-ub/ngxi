import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeepOutlineRoundedIcon],svg[material-symbols-light-keep-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7.423l1.43 1.43q.074.074.11.165t.037.189v.28q0 .207-.15.36q-.149.153-.37.153H12.5v4.927q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356V15H7.942q-.22 0-.37-.153q-.149-.153-.149-.36v-.28q0-.098.037-.189q.036-.091.11-.164L9 12.423V5h-.5q-.213 0-.356-.144T8 4.499t.144-.356T8.5 4h7q.213 0 .356.144t.144.357t-.144.356T15.5 5zm-6.15 9h6.3L14 12.85V5h-4v7.85zM12 14"></svg:path>`,
})
export class MaterialSymbolsLightKeepOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
