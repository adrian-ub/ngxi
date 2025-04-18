import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faWindowRestoreIcon],svg[fa-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1536h768v-512H256zm1024-512h512V256h-768v256h96q66 0 113 47t47 113zm768-864v960q0 66-47 113t-113 47h-608v352q0 66-47 113t-113 47H160q-66 0-113-47T0 1632V672q0-66 47-113t113-47h608V160q0-66 47-113T928 0h960q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowRestoreIcon {
  readonly viewBox = input("0 0 2048 1792")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
