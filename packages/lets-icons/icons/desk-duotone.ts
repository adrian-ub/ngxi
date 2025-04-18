import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskDuotoneIcon],svg[lets-icons-desk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M8 5.309c0-.144 0-.216-.045-.26c-.046-.044-.117-.042-.26-.038c-1.053.03-1.678.143-2.11.575C5 6.172 5 7.114 5 9v7c0 1.886 0 2.828.586 3.414S7.114 20 9 20h6c1.886 0 2.828 0 3.414-.586S19 17.886 19 16V9c0-1.886 0-2.828-.586-3.414c-.431-.432-1.056-.545-2.11-.575c-.142-.004-.213-.006-.258.038s-.046.116-.046.26V6.5a1.5 1.5 0 0 1-3 0V5.3c0-.141 0-.212-.044-.256S12.841 5 12.7 5h-1.4c-.141 0-.212 0-.256.044S11 5.159 11 5.3v1.2a1.5 1.5 0 0 1-3 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 3.5v3m5-3v3m-5 4h5m-5 3h5m-5 3h5"></svg:path></svg:g>`,
})
export class LetsIconsDeskDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
