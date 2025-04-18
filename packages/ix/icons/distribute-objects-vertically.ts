import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDistributeObjectsVerticallyIcon],svg[ix-distribute-objects-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 106.667H64V64h384zM448 448H64v-42.667h384zm-64-256v-21.333H128v170.666h256zm-213.333 21.333h170.666v85.334H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDistributeObjectsVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
