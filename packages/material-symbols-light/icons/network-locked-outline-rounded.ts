import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNetworkLockedOutlineRoundedIcon],svg[material-symbols-light-network-locked-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.373 19.627L19.627 4.373q.379-.379.876-.171t.497.742v6.018q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.427L5.421 20H13.5q.213 0 .356.144t.144.357t-.144.356T13.5 21H4.944q-.534 0-.742-.497t.171-.876M17.119 21q-.35 0-.619-.27t-.27-.618v-2.8q0-.35.27-.6t.62-.25h.11v-1q0-.749.511-1.259t1.259-.51t1.259.51t.51 1.258v1h.112q.358 0 .613.25q.256.25.256.6v2.8q0 .35-.256.62q-.255.269-.613.269zM18 16.462h2v-1q0-.425-.288-.713T19 14.461t-.712.288t-.288.713zM5.421 20L20 5.427l-7.29 7.287z"></svg:path>`,
})
export class MaterialSymbolsLightNetworkLockedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
