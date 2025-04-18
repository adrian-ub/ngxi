import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSortDescendingIcon],svg[ix-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 320h106.667v42.667H64zm0-64h149.333v-42.666H64zm0-106.666h192v-42.667H64zm368.917 146.652L384 344.903V106.667h-42.667v238.236l-48.916-48.917l-30.167 30.167l100.417 100.514l100.416-100.514z"></svg:path>`,
})
export class IxSortDescendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
