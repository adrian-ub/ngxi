import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSteppersIcon],svg[material-symbols-light-steppers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.774 14.23q-.928 0-1.582-.648q-.654-.65-.654-1.578q0-.927.65-1.581q.649-.654 1.577-.654t1.581.65T8 11.995t-.65 1.582t-1.576.654m-.006-1q.523 0 .877-.354T7 12.001t-.354-.877t-.876-.355t-.877.354t-.355.876t.354.877t.876.355m6.237 1q-.928 0-1.582-.65q-.654-.649-.654-1.576q0-.928.65-1.582q.649-.654 1.576-.654q.928 0 1.582.65q.654.649.654 1.576q0 .928-.65 1.582q-.649.654-1.576.654m-.006-1q.522 0 .877-.354t.355-.876t-.354-.877t-.876-.355t-.877.354t-.355.876t.354.877t.876.355m6.236 1q-.927 0-1.581-.65Q16 12.933 16 12.006q0-.928.65-1.582q.649-.654 1.576-.654t1.582.65t.653 1.576t-.649 1.582t-1.577.654"></svg:path>`,
})
export class MaterialSymbolsLightSteppersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
