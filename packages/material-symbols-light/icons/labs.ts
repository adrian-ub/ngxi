import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabsIcon],svg[material-symbols-light-labs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.804 0-3.075-1.241T7.654 16.73V7.654q-.69 0-1.172-.472Q6 6.709 6 6.019V4.654q0-.682.486-1.168T7.654 3h8.673q.69 0 1.182.486q.491.486.491 1.168v1.365q0 .69-.492 1.163q-.491.472-1.181.472v9.365q-.115 1.69-1.366 2.836T12 21m0-1q1.386 0 2.357-.942q.97-.943.97-2.327v-.75h-3.193v-1h3.193v-2.846h-3.192v-1h3.192V7.654H8.654v9.077q0 1.384.976 2.327T12 20"></svg:path>`,
})
export class MaterialSymbolsLightLabsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
