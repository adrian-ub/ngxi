import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStrollerOutlineRoundedIcon],svg[material-symbols-light-stroller-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.73 20.346q-.586 0-1.004-.418t-.418-1.005t.418-1.005t1.005-.418t1.005.418t.418 1.005t-.418 1.005t-1.005.418m-7.77 0q-.574 0-.998-.418t-.424-1.005t.424-1.005t.999-.418q.613 0 1.018.418t.404 1.005t-.404 1.005t-1.018.418m1.58-4.846h4.997q.269 0 .442-.173t.173-.442v-5.96zm-1.117 1q-.32 0-.45-.287t.085-.536l8.679-10.175q.442-.518.939-.76t1.107-.242q.88 0 1.48.6t.6 1.49v.016q0 .212-.143.356t-.357.144t-.356-.144t-.143-.356v-.02q0-.463-.31-.775q-.311-.311-.771-.311q-.381 0-.675.148t-.546.425l-1.41 1.644v7.162q0 .677-.474 1.149t-1.14.472zm2.81-6.842L6.967 6.39q-.248-.249-.197-.575t.353-.499q.789-.396 1.626-.606q.838-.211 1.77-.211q.895 0 1.742.179t1.75.556zm-.068-1.47l2.087-2.446q-.431-.12-.867-.182q-.437-.06-.868-.06q-.654 0-1.28.123t-1.235.383zm0 0"></svg:path>`,
})
export class MaterialSymbolsLightStrollerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
